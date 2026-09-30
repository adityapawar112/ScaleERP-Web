import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { signLicense, LicensePayload } from "@/lib/licensing";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  let customerName = "Demo Customer";
  let deviceFingerprint = "";
  let edition = "Pro";
  const ipAddress = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

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
  } catch {
    // If body is empty or not JSON, proceed with defaults
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
  const customerId = `cust_demo_${crypto.randomBytes(4).toString("hex")}`;

  const licensePayload: LicensePayload = {
    license_id: activationId,
    customer_id: customerId,
    edition: edition,
    valid_from: now.toISOString(),
    valid_until: validUntil.toISOString(),
    maintenance_until: maintenanceUntil.toISOString(),
    device_fingerprint: deviceFingerprint || "",
  };

  const licenseBlob = signLicense(licensePayload);
  const isUniversal = !deviceFingerprint;

  // Attempt persistence into Supabase (graceful fallback if Supabase is offline or table constraints differ)
  try {
    const { error: keyError } = await supabaseAdmin.from("license_keys").insert({
      key_code: keyCode,
      customer_id: customerId,
      edition: edition,
      max_devices: 1,
      active_devices: deviceFingerprint ? 1 : 0,
      valid_from: now.toISOString(),
      valid_until: validUntil.toISOString(),
      maintenance_until: maintenanceUntil.toISOString(),
      is_revoked: false,
    });

    if (!keyError && deviceFingerprint) {
      await supabaseAdmin.from("device_activations").insert({
        activation_id: activationId,
        key_code: keyCode,
        device_fingerprint: deviceFingerprint,
        hostname: "Demo Air-Gapped Machine",
        activated_at: now.toISOString(),
        last_sync_at: now.toISOString(),
        license_blob: licenseBlob,
      });
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
    keyCode,
    licenseBlob,
    validFrom: now.toISOString(),
    validUntil: validUntil.toISOString(),
    maintenanceUntil: maintenanceUntil.toISOString(),
    edition,
    customerName,
    isUniversal,
    deviceFingerprint: deviceFingerprint || null,
  });
}
