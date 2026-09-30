import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function checkAdminAuth(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  const envSecret = process.env.ADMIN_SECRET || "scaleerp-admin-temp";
  return secret === envSecret;
}

export async function GET(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch all keys with customer info
    const { data: keys, error: keysError } = await supabaseAdmin
      .from("license_keys")
      .select("*, customers(name, phone, email)")
      .order("created_at", { ascending: false });

    if (keysError) throw keysError;

    // Fetch all activations
    const { data: activations, error: actError } = await supabaseAdmin
      .from("device_activations")
      .select("*");

    if (actError) throw actError;

    // Join them
    const result = keys.map(key => {
      const boundDevice = activations.find(a => a.key_code === key.key_code);
      return {
        ...key,
        bound_fingerprint: boundDevice ? boundDevice.device_fingerprint : null,
        hostname: boundDevice ? boundDevice.hostname : null,
        last_sync_at: boundDevice ? boundDevice.last_sync_at : null,
        license_blob: boundDevice ? boundDevice.license_blob : null,
      };
    });

    return NextResponse.json({ success: true, keys: result });
  } catch (error) {
    console.error("Error fetching keys:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const edition = body.edition || "Pro";
    const durationMonths = parseInt(body.durationMonths) || 12;
    const customerName = (body.customerName || "").trim();
    const customerPhone = (body.customerPhone || "").trim();

    let customerId = null;

    if (customerName || customerPhone) {
      // Create a customer record. Email is required and unique, so we generate a dummy one if not provided.
      const dummyEmail = `user-${Date.now()}@scaleerp.local`;
      const { data: newCustomer, error: customerError } = await supabaseAdmin
        .from("customers")
        .insert({
          name: customerName || "Unknown Retailer",
          phone: customerPhone || null,
          email: dummyEmail,
        })
        .select()
        .single();
        
      if (customerError) throw customerError;
      customerId = newCustomer.id;
    }

    // Generate random 16-char alphanumeric key (XXXX-XXXX-XXXX-XXXX)
    const generateSegment = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let res = "";
      for (let i = 0; i < 4; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
      return res;
    };
    const keyCode = `${generateSegment()}-${generateSegment()}-${generateSegment()}-${generateSegment()}`;

    const now = new Date();
    const validUntil = new Date(now);
    validUntil.setMonth(validUntil.getMonth() + durationMonths);
    
    // Set maintenance 90 days earlier if duration is 1 year, else same as validUntil
    const maintenanceUntil = new Date(validUntil);
    if (durationMonths === 12) {
      maintenanceUntil.setDate(maintenanceUntil.getDate() - 90);
    }

    const newKey = {
      key_code: keyCode,
      customer_id: customerId,
      edition: edition,
      max_devices: 1,
      active_devices: 0,
      valid_from: now.toISOString(),
      valid_until: validUntil.toISOString(),
      maintenance_until: maintenanceUntil.toISOString(),
      is_revoked: false,
    };

    const { error } = await supabaseAdmin.from("license_keys").insert(newKey);
    if (error) throw error;

    return NextResponse.json({ success: true, key: newKey });
  } catch (error) {
    console.error("Error generating key:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const keyCode = body.keyCode;
    
    if (!keyCode) {
      return NextResponse.json({ success: false, message: "Key code required" }, { status: 400 });
    }

    const updates: any = { updated_at: new Date().toISOString() };
    if (body.validUntil) updates.valid_until = new Date(body.validUntil).toISOString();
    if (body.maintenanceUntil) updates.maintenance_until = new Date(body.maintenanceUntil).toISOString();
    if (body.isRevoked !== undefined) updates.is_revoked = Boolean(body.isRevoked);

    const { error } = await supabaseAdmin
      .from("license_keys")
      .update(updates)
      .eq("key_code", keyCode);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "License updated successfully" });
  } catch (error) {
    console.error("Error updating key:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
