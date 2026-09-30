import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { signLicense, LicensePayload } from "@/lib/licensing";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  let activationKey = "";
  let deviceFingerprint = "";
  let hostname = "";
  const ipAddress = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

  try {
    const body = await req.json();
    activationKey = (body.activationKey || "").trim();
    deviceFingerprint = (body.deviceFingerprint || "").trim();
    hostname = (body.hostname || "").trim();
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  // 1. Sanitization: Validate key format (XXXX-XXXX-XXXX-XXXX)
  const keyRegex = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  if (!keyRegex.test(activationKey)) {
    // Log failure
    await supabaseAdmin.from("activation_logs").insert({
      key_code: activationKey || null,
      device_fingerprint: deviceFingerprint || null,
      ip_address: ipAddress,
      status: "FAILED_INVALID_KEY",
    });

    return NextResponse.json(
      { success: false, message: "Invalid activation key format. Must be formatted as XXXX-XXXX-XXXX-XXXX." },
      { status: 400 }
    );
  }

  // Ensure fingerprint exists and is a valid 64-character hex (SHA-256)
  const fpRegex = /^[a-fA-F0-9]{64}$/;
  if (!deviceFingerprint || !fpRegex.test(deviceFingerprint)) {
    return NextResponse.json(
      { success: false, message: "A valid 64-character SHA-256 device fingerprint is required." },
      { status: 400 }
    );
  }

  try {
    // 2. Master Entitlement Lookup
    const { data: license, error: licenseError } = await supabaseAdmin
      .from("license_keys")
      .select("*")
      .eq("key_code", activationKey)
      .single();

    if (licenseError || !license) {
      await supabaseAdmin.from("activation_logs").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        ip_address: ipAddress,
        status: "FAILED_INVALID_KEY",
      });

      return NextResponse.json(
        { success: false, message: "Activation key not found." },
        { status: 404 }
      );
    }

    // Revocation & Expiry Audit
    if (license.is_revoked) {
      await supabaseAdmin.from("activation_logs").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        ip_address: ipAddress,
        status: "FAILED_EXPIRED", // Revoked behaves similarly to expired for simple logs
      });

      return NextResponse.json(
        { success: false, message: "This activation key has been revoked." },
        { status: 403 }
      );
    }

    const now = new Date();
    const validUntil = new Date(license.valid_until);
    if (validUntil < now) {
      await supabaseAdmin.from("activation_logs").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        ip_address: ipAddress,
        status: "FAILED_EXPIRED",
      });

      return NextResponse.json(
        { success: false, message: "This license has expired.", expiredAt: license.valid_until },
        { status: 403 }
      );
    }

    // 3. Device Quota Management / Hardware Binding
    // Check if the license is already bound to any device
    const { data: existingActivations, error: activationError } = await supabaseAdmin
      .from("device_activations")
      .select("*")
      .eq("key_code", activationKey);

    let activationId = "";
    let isExistingSameDevice = false;

    if (existingActivations && existingActivations.length > 0) {
      // Find if this specific device fingerprint is already bound
      const match = existingActivations.find(a => a.device_fingerprint === deviceFingerprint);
      
      if (match) {
        // It's a re-download/regeneration for the EXACT same device. This is allowed infinitely.
        activationId = match.activation_id;
        isExistingSameDevice = true;
      } else {
        // The key is already bound to a DIFFERENT device fingerprint.
        await supabaseAdmin.from("activation_logs").insert({
          key_code: activationKey,
          device_fingerprint: deviceFingerprint,
          ip_address: ipAddress,
          status: "FAILED_DEVICE_LIMIT",
        });

        return NextResponse.json(
          { 
            success: false, 
            message: `This license key is already bound to another device. It cannot be used on a new machine.` 
          },
          { status: 403 }
        );
      }
    } else {
      // It's a brand new device activation (first time use). Verify active_devices < max_devices
      if (license.active_devices >= license.max_devices) {
        await supabaseAdmin.from("activation_logs").insert({
          key_code: activationKey,
          device_fingerprint: deviceFingerprint,
          ip_address: ipAddress,
          status: "FAILED_DEVICE_LIMIT",
        });

        return NextResponse.json(
          { 
            success: false, 
            message: `Device limit reached. This license only supports a maximum of ${license.max_devices} device(s).` 
          },
          { status: 403 }
        );
      }

      // Generate a temporary UUID for the new activation block
      activationId = crypto.randomUUID();
    }

    // 4. Cryptographic License Blob Generation
    const licensePayload: LicensePayload = {
      license_id: activationId,
      customer_id: license.customer_id,
      edition: license.edition,
      valid_from: license.valid_from,
      valid_until: license.valid_until,
      maintenance_until: license.maintenance_until,
      device_fingerprint: deviceFingerprint,
    };

    const licenseBlob = signLicense(licensePayload);

    if (isExistingSameDevice) {
      // Update existing activation
      const { error: updateError } = await supabaseAdmin
        .from("device_activations")
        .update({
          hostname: hostname || existingActivations![0].hostname,
          last_sync_at: now.toISOString(),
          license_blob: licenseBlob,
        })
        .eq("activation_id", activationId);

      if (updateError) throw updateError;
    } else {
      // Insert new activation
      const { error: insertError } = await supabaseAdmin
        .from("device_activations")
        .insert({
          activation_id: activationId,
          key_code: activationKey,
          device_fingerprint: deviceFingerprint,
          hostname: hostname || null,
          activated_at: now.toISOString(),
          last_sync_at: now.toISOString(),
          license_blob: licenseBlob,
        });

      if (insertError) throw insertError;

      // Increment active_devices count on the license key
      const { error: incrementError } = await supabaseAdmin
        .from("license_keys")
        .update({
          active_devices: license.active_devices + 1,
          updated_at: now.toISOString(),
        })
        .eq("key_code", activationKey);

      if (incrementError) throw incrementError;
    }

    // 5. Log success
    await supabaseAdmin.from("activation_logs").insert({
      key_code: activationKey,
      device_fingerprint: deviceFingerprint,
      ip_address: ipAddress,
      status: "SUCCESS",
    });

    // 6. Return response
    return NextResponse.json({
      success: true,
      licenseBlob: licenseBlob,
      validUntil: license.valid_until,
      maintenanceUntil: license.maintenance_until,
      edition: license.edition,
    });

  } catch (error: any) {
    console.error("Activation error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred during activation." },
      { status: 500 }
    );
  }
}
