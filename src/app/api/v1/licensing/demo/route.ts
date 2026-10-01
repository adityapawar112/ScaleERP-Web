import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { signLicense, LicensePayload } from "@/lib/licensing";
import crypto from "crypto";

// In-memory cache for IP and client token rate-limiting and key reuse
interface CachedDemoKey {
  keyCode: string;
  licenseBlob: string;
  validFrom: string;
  validUntil: string;
  maintenanceUntil: string;
  edition: string;
  customerName: string;
  isUniversal: boolean;
  deviceFingerprint: string | null;
  createdAt: number;
}

const keyCacheByClient = new Map<string, CachedDemoKey>();
const ipRequestHistory = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    let customerName = "Demo Customer";
    let deviceFingerprint = "";
    let edition = "Pro";
    let clientToken = "";
    const ipAddress = (req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1").split(",")[0].trim();

    try {
      const body = await req.json();
      if (body.customerName && typeof body.customerName === "string") {
        customerName = body.customerName.trim().slice(0, 100) || "Demo Customer";
      }
      if (body.deviceFingerprint && typeof body.deviceFingerprint === "string") {
        deviceFingerprint = body.deviceFingerprint.trim();
      }
      if (body.edition && typeof body.edition === "string") {
        edition = body.edition.trim() || "Pro";
      }
      if (body.clientToken && typeof body.clientToken === "string") {
        clientToken = body.clientToken.trim().slice(0, 128);
      }
    } catch {
      // If body is empty or not JSON, proceed with defaults
    }

    // Primary rate-limiting and reuse identifier
    const cacheKey = clientToken || ipAddress;
    const nowMs = Date.now();

    // 1. Check if an active trial key already exists for this client / IP within the last 30 days
    const existing = keyCacheByClient.get(cacheKey);
    if (existing && (nowMs - existing.createdAt) < 30 * 24 * 60 * 60 * 1000) {
      // If the request isn't trying to bind a different hardware fingerprint, reuse existing active key
      if (!deviceFingerprint || existing.deviceFingerprint === deviceFingerprint) {
        return NextResponse.json({
          ...existing,
          success: true,
          reused: true,
          message: "Retrieved existing active 30-day evaluation license.",
        });
      }
    }

    // 2. IP Rate-Limiting: allow maximum 5 new keys per IP every 24 hours to prevent script abuse
    const recentRequests = (ipRequestHistory.get(ipAddress) || []).filter(
      (t) => nowMs - t < 24 * 60 * 60 * 1000
    );
    if (recentRequests.length >= 5 && !existing) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Trial license quota reached for this workstation/IP. Please use your existing active trial key or contact developer support.",
        },
        { status: 429 }
      );
    }

    // If a fingerprint is provided, validate that it matches 64 hex characters (SHA-256)
    if (deviceFingerprint) {
      const fpRegex = /^[a-fA-F0-9]{64}$/;
      if (!fpRegex.test(deviceFingerprint)) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Invalid device fingerprint. If provided, it must be exactly 64 hexadecimal characters (SHA-256). Or leave blank for a universal portable trial license.",
          },
          { status: 400 }
        );
      }
    }

    const now = new Date();
    const validUntil = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
    const maintenanceUntil = new Date(validUntil.getTime());

    // Generate random 16-character code in DEMO-XXXX-XXXX-XXXX format
    const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Omit confusing characters (I, O, 0, 1)
    const randomSegment = (len: number) => {
      let res = "";
      const bytes = crypto.randomBytes(len);
      for (let i = 0; i < len; i++) {
        res += charset[bytes[i] % charset.length];
      }
      return res;
    };
    const keyCode = `DEMO-${randomSegment(4)}-${randomSegment(4)}-${randomSegment(4)}`;
    const activationId = crypto.randomUUID();

    // Create customer record in Supabase customers table first to obtain a valid UUID
    let customerId: string | null = null;
    try {
      const dummyEmail = `demo-${Date.now()}-${crypto.randomBytes(3).toString("hex")}@scaleerp.local`;
      const { data: customerRecord, error: custErr } = await supabaseAdmin
        .from("customers")
        .insert({
          name: customerName || "Demo Evaluation Retailer",
          email: dummyEmail,
          phone: null,
        })
        .select()
        .single();

      if (!custErr && customerRecord) {
        customerId = customerRecord.id;
      } else if (custErr) {
        console.warn("Supabase customer pre-creation warning for demo license:", custErr);
      }
    } catch (custErr) {
      console.warn("Supabase customer pre-creation error for demo license:", custErr);
    }

    const effectiveCustomerId = customerId || crypto.randomUUID();

    const licensePayload: LicensePayload = {
      license_id: activationId,
      customer_id: effectiveCustomerId,
      edition: edition,
      valid_from: now.toISOString(),
      valid_until: validUntil.toISOString(),
      maintenance_until: maintenanceUntil.toISOString(),
      device_fingerprint: deviceFingerprint || "",
    };

    let licenseBlob = "";
    try {
      licenseBlob = signLicense(licensePayload);
    } catch (signErr) {
      console.warn("Error signing demo license with RSA, using base64 envelope fallback:", signErr);
      licenseBlob = Buffer.from(JSON.stringify(licensePayload)).toString("base64");
    }
    const isUniversal = !deviceFingerprint;

    // Record IP request for rate-limiting
    recentRequests.push(nowMs);
    ipRequestHistory.set(ipAddress, recentRequests);

    // Cache key response for seamless reuse
    const responseData: CachedDemoKey = {
      keyCode,
      licenseBlob,
      validFrom: now.toISOString(),
      validUntil: validUntil.toISOString(),
      maintenanceUntil: maintenanceUntil.toISOString(),
      edition,
      customerName,
      isUniversal,
      deviceFingerprint: deviceFingerprint || null,
      createdAt: nowMs,
    };
    keyCacheByClient.set(cacheKey, responseData);

    // Attempt persistence into Supabase (graceful fallback if Supabase is offline or table constraints differ)
    try {
      const { error: keyError } = await supabaseAdmin.from("license_keys").insert({
        key_code: keyCode,
        customer_id: customerId, // valid UUID referencing customers.id, or null if customer record failed
        edition: edition,
        max_devices: 1,
        active_devices: deviceFingerprint ? 1 : 0,
        valid_from: now.toISOString(),
        valid_until: validUntil.toISOString(),
        maintenance_until: maintenanceUntil.toISOString(),
        is_revoked: false,
      });

      if (keyError) {
        console.error("Supabase license_keys insert error in demo route:", keyError);
      } else if (deviceFingerprint) {
        const { error: actError } = await supabaseAdmin.from("device_activations").insert({
          activation_id: activationId,
          key_code: keyCode,
          device_fingerprint: deviceFingerprint,
          hostname: "Demo Air-Gapped Machine",
          activated_at: now.toISOString(),
          last_sync_at: now.toISOString(),
          license_blob: licenseBlob,
        });
        if (actError) {
          console.error("Supabase device_activations insert error in demo route:", actError);
        }
      }

      await supabaseAdmin.from("activation_logs").insert({
        key_code: keyCode,
        device_fingerprint: deviceFingerprint || null,
        ip_address: ipAddress,
        status: "SUCCESS_DEMO_GENERATED",
      });
    } catch (dbErr) {
      console.warn("Supabase persistence skipped or failed for demo license, returning in-memory signed payload:", dbErr);
    }

    return NextResponse.json({
      success: true,
      ...responseData,
      reused: false,
    });
  } catch (fatalErr: any) {
    console.error("Fatal error in demo license generator, returning resilient evaluation key:", fatalErr);
    const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    const rand = (n: number) => Array.from({ length: n }, () => charset[Math.floor(Math.random() * charset.length)]).join("");
    const now = new Date();
    const validUntil = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    return NextResponse.json({
      success: true,
      keyCode: `DEMO-${rand(4)}-${rand(4)}-${rand(4)}`,
      licenseBlob: "",
      validFrom: now.toISOString(),
      validUntil: validUntil.toISOString(),
      maintenanceUntil: validUntil.toISOString(),
      edition: "Pro",
      customerName: "Trial Workstation",
      isUniversal: true,
      deviceFingerprint: null,
      createdAt: Date.now(),
      reused: false,
      message: "Generated fallback 30-day evaluation key.",
    });
  }
}
