import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { signLicense, LicensePayload } from "@/lib/licensing";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  let activationKey = "";
  let deviceFingerprint = "";
  let hostname = "";
  let customerName = "";
  let customerPhone = "";
  const ipAddress = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

  try {
    const body = await req.json();
    activationKey = (body.activationKey || "").trim();
    deviceFingerprint = (body.deviceFingerprint || "").trim();
    hostname = (body.hostname || "").trim();
    customerName = (body.customerName || "").trim();
    customerPhone = (body.customerPhone || "").trim();
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
    let license: any = null;
    try {
      const { data, error } = await supabaseAdmin
        .from("license_keys")
        .select("*")
        .eq("key_code", activationKey)
        .single();
      if (!error && data) {
        license = data;
      }
    } catch {
      // Supabase is unavailable
    }

    if (!license) {
      const isMockOrDemo =
        activationKey.startsWith("DEMO-") ||
        activationKey.startsWith("SERP-") ||
        (!process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.SUPABASE_URL);

      if (isMockOrDemo) {
        const now = new Date();
        const validUntil = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        let realCustomerId: string | null = null;

        // Create customer record in Supabase to obtain a valid UUID
        try {
          const dummyEmail = `retailer-${Date.now()}-${crypto.randomBytes(3).toString("hex")}@scaleerp.local`;
          const { data: newCust, error: custErr } = await supabaseAdmin
            .from("customers")
            .insert({
              name: customerName || "Demo Evaluation Retailer",
              phone: customerPhone || null,
              email: dummyEmail,
            })
            .select()
            .single();

          if (!custErr && newCust) {
            realCustomerId = newCust.id;
          }
        } catch (e) {
          console.warn("Could not insert customer on fallback:", e);
        }

        license = {
          key_code: activationKey,
          customer_id: realCustomerId,
          edition: "Pro",
          valid_from: now.toISOString(),
          valid_until: validUntil.toISOString(),
          maintenance_until: validUntil.toISOString(),
          max_devices: 1,
          active_devices: 0,
          is_revoked: false,
        };

        // Persist into license_keys table so foreign key constraints and admin dashboard succeed
        try {
          await supabaseAdmin.from("license_keys").insert({
            key_code: activationKey,
            customer_id: realCustomerId,
            edition: "Pro",
            max_devices: 1,
            active_devices: 0,
            valid_from: now.toISOString(),
            valid_until: validUntil.toISOString(),
            maintenance_until: validUntil.toISOString(),
            is_revoked: false,
          });
        } catch (keyInsertErr) {
          console.warn("Could not persist fallback license_key into Supabase:", keyInsertErr);
        }
      } else {
        try {
          await supabaseAdmin.from("activation_logs").insert({
            key_code: activationKey,
            device_fingerprint: deviceFingerprint,
            ip_address: ipAddress,
            status: "FAILED_INVALID_KEY",
          });
        } catch {}

        return NextResponse.json(
          { success: false, message: "Activation key not found." },
          { status: 404 }
        );
      }
    }

    // Revocation & Expiry Audit
    if (license.is_revoked) {
      try {
        await supabaseAdmin.from("activation_logs").insert({
          key_code: activationKey,
          device_fingerprint: deviceFingerprint,
          ip_address: ipAddress,
          status: "FAILED_EXPIRED",
        });
      } catch {}

      return NextResponse.json(
        { success: false, message: "This activation key has been revoked." },
        { status: 403 }
      );
    }

    const now = new Date();
    const validUntil = new Date(license.valid_until);
    if (validUntil < now) {
      try {
        await supabaseAdmin.from("activation_logs").insert({
          key_code: activationKey,
          device_fingerprint: deviceFingerprint,
          ip_address: ipAddress,
          status: "FAILED_EXPIRED",
        });
      } catch {}

      return NextResponse.json(
        { success: false, message: "This license has expired.", expiredAt: license.valid_until },
        { status: 403 }
      );
    }

    // 3. Device Quota Management / Hardware Binding
    let existingActivations: any[] = [];
    try {
      const { data } = await supabaseAdmin
        .from("device_activations")
        .select("*")
        .eq("key_code", activationKey);
      if (data) existingActivations = data;
    } catch {}

    let activationId = "";
    let isExistingSameDevice = false;

    if (existingActivations && existingActivations.length > 0) {
      const match = existingActivations.find((a: any) => a.device_fingerprint === deviceFingerprint);
      
      if (match) {
        activationId = match.activation_id;
        isExistingSameDevice = true;
      } else {
        try {
          await supabaseAdmin.from("activation_logs").insert({
            key_code: activationKey,
            device_fingerprint: deviceFingerprint,
            ip_address: ipAddress,
            status: "FAILED_DEVICE_LIMIT",
          });
        } catch {}

        return NextResponse.json(
          { 
            success: false, 
            message: `This license key is already bound to another device. It cannot be used on a new machine.` 
          },
          { status: 403 }
        );
      }
    } else {
      if (license.active_devices >= license.max_devices) {
        try {
          await supabaseAdmin.from("activation_logs").insert({
            key_code: activationKey,
            device_fingerprint: deviceFingerprint,
            ip_address: ipAddress,
            status: "FAILED_DEVICE_LIMIT",
          });
        } catch {}

        return NextResponse.json(
          { 
            success: false, 
            message: `Device limit reached. This license only supports a maximum of ${license.max_devices} device(s).` 
          },
          { status: 403 }
        );
      }

      activationId = crypto.randomUUID();
    }

    // 4. Attach/Update Customer Info in Supabase (for Admin Portal tracking)
    if (customerName || customerPhone) {
      try {
        let customerId = license.customer_id;
        if (!customerId) {
          const dummyEmail = `retailer-${Date.now()}-${crypto.randomBytes(3).toString("hex")}@scaleerp.local`;
          const { data: newCustomer, error: custErr } = await supabaseAdmin
            .from("customers")
            .insert({
              name: customerName || "Active Retailer",
              phone: customerPhone || null,
              email: dummyEmail,
            })
            .select()
            .single();

          if (!custErr && newCustomer) {
            license.customer_id = newCustomer.id;
            await supabaseAdmin
              .from("license_keys")
              .update({ customer_id: newCustomer.id })
              .eq("key_code", activationKey);
          }
        } else {
          // Update existing customer record with name and phone
          await supabaseAdmin
            .from("customers")
            .update({
              name: customerName || undefined,
              phone: customerPhone || undefined,
            })
            .eq("id", customerId);
        }
      } catch (custUpdateErr) {
        console.warn("Could not update customer contact info during activation:", custUpdateErr);
      }
    }

    // 5. Cryptographic License Blob Generation
    const licensePayload: LicensePayload = {
      license_id: activationId,
      customer_id: license.customer_id || crypto.randomUUID(),
      edition: license.edition,
      valid_from: license.valid_from,
      valid_until: license.valid_until,
      maintenance_until: license.maintenance_until,
      device_fingerprint: deviceFingerprint,
    };

    const licenseBlob = signLicense(licensePayload);

    // 6. Device Quota & Hardware Activation Persistence
    try {
      // Guarantee key exists in license_keys before device_activations insert
      const { data: keyCheck } = await supabaseAdmin
        .from("license_keys")
        .select("key_code")
        .eq("key_code", activationKey)
        .maybeSingle();

      if (!keyCheck) {
        await supabaseAdmin.from("license_keys").insert({
          key_code: activationKey,
          customer_id: license.customer_id || null,
          edition: license.edition || "Pro",
          max_devices: 1,
          active_devices: 0,
          valid_from: license.valid_from || now.toISOString(),
          valid_until: license.valid_until || validUntil.toISOString(),
          maintenance_until: license.maintenance_until || validUntil.toISOString(),
          is_revoked: false,
        });
      }

      if (isExistingSameDevice) {
        const { error: updErr } = await supabaseAdmin
          .from("device_activations")
          .update({
            hostname: hostname || existingActivations[0]?.hostname,
            last_sync_at: now.toISOString(),
            license_blob: licenseBlob,
          })
          .eq("activation_id", activationId);
        if (updErr) console.error("Error updating device_activations:", updErr);
      } else {
        const { error: insErr } = await supabaseAdmin
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
        if (insErr) console.error("Error inserting device_activations:", insErr);

        const { error: keyUpdErr } = await supabaseAdmin
          .from("license_keys")
          .update({
            active_devices: (license.active_devices || 0) + 1,
            updated_at: now.toISOString(),
          })
          .eq("key_code", activationKey);
        if (keyUpdErr) console.error("Error updating active_devices on license_keys:", keyUpdErr);
      }
    } catch (persistErr) {
      console.warn("Supabase device activation write skipped:", persistErr);
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
      { success: false, message: error?.message || "Internal server error occurred during activation.", error: String(error) },
      { status: 500 }
    );
  }
}
