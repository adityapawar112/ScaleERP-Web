import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { signLicense, LicensePayload } from "@/lib/licensing";

export async function POST(req: NextRequest) {
  let activationKey = "";
  let deviceFingerprint = "";
  let clientSystemTime = "";
  let appVersion = "";
  let osHostname = "";
  let licenseState = "";
  let localDatabaseState = {
    reportedValidFrom: "",
    reportedValidUntil: "",
    reportedMaintenanceUntil: "",
  };

  try {
    const body = await req.json();
    activationKey = (body.activationKey || "").trim();
    deviceFingerprint = (body.deviceFingerprint || "").trim();
    clientSystemTime = body.clientSystemTime || "";
    appVersion = body.appVersion || "";
    osHostname = body.osHostname || "";
    licenseState = body.licenseState || "";
    localDatabaseState = body.localDatabaseState || {};
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  if (!activationKey || !deviceFingerprint || !clientSystemTime || !localDatabaseState.reportedValidUntil) {
    return NextResponse.json(
      { success: false, message: "Missing required heartbeat parameters." },
      { status: 400 }
    );
  }

  const serverTime = new Date();
  const ipAddress = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

  try {
    // 1. Fetch license master record from Supabase
    const { data: license, error: licenseError } = await supabaseAdmin
      .from("license_keys")
      .select("*")
      .eq("key_code", activationKey)
      .single();

    if (licenseError || !license) {
      return NextResponse.json(
        { success: false, message: "License key not found." },
        { status: 404 }
      );
    }

    // Check if the device is activated
    const { data: activation, error: activationError } = await supabaseAdmin
      .from("device_activations")
      .select("*")
      .eq("key_code", activationKey)
      .eq("device_fingerprint", deviceFingerprint)
      .maybeSingle();

    if (!activation) {
      return NextResponse.json(
        { success: false, message: "Device is not activated for this license key." },
        { status: 403 }
      );
    }

    // 2. Validate Clock Rewind (Rule 3)
    const clientTimeObj = new Date(clientSystemTime);
    const timeDifferenceMs = serverTime.getTime() - clientTimeObj.getTime();
    
    // Check if client clock is set back by more than 24 hours
    if (timeDifferenceMs > 86400000) {
      const reason = "CLOCK_REWIND_DETECTED";

      // Log tamper heartbeat
      await supabaseAdmin.from("client_heartbeats").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        client_system_time: clientTimeObj.toISOString(),
        server_recorded_time: serverTime.toISOString(),
        reported_valid_until: localDatabaseState.reportedValidUntil,
        reported_maintenance_until: localDatabaseState.reportedMaintenanceUntil || localDatabaseState.reportedValidUntil,
        is_tamper_flagged: true,
        tamper_reason: reason,
        app_version: appVersion,
        os_hostname: osHostname,
        license_state: licenseState,
      });

      // Audit lockout
      await supabaseAdmin.from("activation_logs").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        ip_address: ipAddress,
        status: "SECURITY_TAMPER_LOCK",
      });

      return NextResponse.json({
        success: true,
        securityLockout: true,
        reason: reason,
      });
    }

    // 3. Validate Database Manipulation (Rule 2)
    const reportedValidUntilObj = new Date(localDatabaseState.reportedValidUntil);
    const reportedMaintenanceUntilObj = new Date(
      localDatabaseState.reportedMaintenanceUntil || localDatabaseState.reportedValidUntil
    );

    const masterValidUntilObj = new Date(license.valid_until);
    const masterMaintenanceUntilObj = new Date(license.maintenance_until);

    // Alert if local database date is later than Supabase (i.e. cracked/altered)
    if (reportedValidUntilObj > masterValidUntilObj || reportedMaintenanceUntilObj > masterMaintenanceUntilObj) {
      const reason = "DATABASE_MANIPULATION_DETECTED";

      // Log tamper heartbeat
      await supabaseAdmin.from("client_heartbeats").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        client_system_time: clientTimeObj.toISOString(),
        server_recorded_time: serverTime.toISOString(),
        reported_valid_until: localDatabaseState.reportedValidUntil,
        reported_maintenance_until: localDatabaseState.reportedMaintenanceUntil || localDatabaseState.reportedValidUntil,
        is_tamper_flagged: true,
        tamper_reason: reason,
      });

      // Audit lockout
      await supabaseAdmin.from("activation_logs").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        ip_address: ipAddress,
        status: "SECURITY_TAMPER_LOCK",
      });

      return NextResponse.json({
        success: true,
        securityLockout: true,
        reason: reason,
      });
    }

    // 4. Check for Renewal/Update (Rule 1)
    // If Supabase dates are LATER than what the client reports, we trigger an auto-renewal re-sign.
    const hasValidDateChanged = masterValidUntilObj > reportedValidUntilObj;
    const hasMaintenanceDateChanged = masterMaintenanceUntilObj > reportedMaintenanceUntilObj;

    if (hasValidDateChanged || hasMaintenanceDateChanged || license.is_revoked) {
      // Re-sign fresh license payload with updated dates
      const licensePayload: LicensePayload = {
        license_id: activation.activation_id,
        customer_id: license.customer_id,
        edition: license.edition,
        valid_from: license.valid_from,
        valid_until: license.valid_until,
        maintenance_until: license.maintenance_until,
        device_fingerprint: deviceFingerprint,
      };

      const updatedLicenseBlob = signLicense(licensePayload);

      // Save updated license blob to db
      await supabaseAdmin
        .from("device_activations")
        .update({
          license_blob: updatedLicenseBlob,
          last_sync_at: serverTime.toISOString(),
        })
        .eq("activation_id", activation.activation_id);

      // Log successful sync
      await supabaseAdmin.from("client_heartbeats").insert({
        key_code: activationKey,
        device_fingerprint: deviceFingerprint,
        client_system_time: clientTimeObj.toISOString(),
        server_recorded_time: serverTime.toISOString(),
        reported_valid_until: localDatabaseState.reportedValidUntil,
        reported_maintenance_until: localDatabaseState.reportedMaintenanceUntil || localDatabaseState.reportedValidUntil,
        is_tamper_flagged: false,
        app_version: appVersion,
        os_hostname: osHostname,
        license_state: licenseState,
      });

      return NextResponse.json({
        success: true,
        securityLockout: false,
        serverTime: serverTime.toISOString(),
        isLicenseUpdated: true,
        updatedLicenseBlob: updatedLicenseBlob,
        newValidUntil: license.valid_until,
        newMaintenanceUntil: license.maintenance_until,
      });
    }

    // 5. Normal Sync (Perfect Match)
    await supabaseAdmin
      .from("device_activations")
      .update({
        last_sync_at: serverTime.toISOString(),
      })
      .eq("activation_id", activation.activation_id);

    await supabaseAdmin.from("client_heartbeats").insert({
      key_code: activationKey,
      device_fingerprint: deviceFingerprint,
      client_system_time: clientTimeObj.toISOString(),
      server_recorded_time: serverTime.toISOString(),
      reported_valid_until: localDatabaseState.reportedValidUntil,
      reported_maintenance_until: localDatabaseState.reportedMaintenanceUntil || localDatabaseState.reportedValidUntil,
      is_tamper_flagged: false,
      app_version: appVersion,
      os_hostname: osHostname,
      license_state: licenseState,
    });

    return NextResponse.json({
      success: true,
      securityLockout: false,
      serverTime: serverTime.toISOString(),
      isLicenseUpdated: false,
    });

  } catch (error) {
    console.error("Heartbeat sync error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during heartbeat synchronization." },
      { status: 500 }
    );
  }
}
