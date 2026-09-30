import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function checkAdminAuth(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  const envSecret = process.env.ADMIN_SECRET || "scaleerp-admin-temp";
  return secret === envSecret;
}

export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const keyCode = body.keyCode;

    if (!keyCode) {
      return NextResponse.json({ success: false, message: "Key code is required" }, { status: 400 });
    }

    // Delete the device_activations row to "reset" the hardware binding
    const { error: delError } = await supabaseAdmin
      .from("device_activations")
      .delete()
      .eq("key_code", keyCode);

    if (delError) throw delError;

    // Optional: Reset active_devices counter on the license_key
    const { error: updateError } = await supabaseAdmin
      .from("license_keys")
      .update({ active_devices: 0 })
      .eq("key_code", keyCode);

    if (updateError) throw updateError;

    return NextResponse.json({ success: true, message: "Device fingerprint reset successfully." });
  } catch (error) {
    console.error("Error resetting key:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
