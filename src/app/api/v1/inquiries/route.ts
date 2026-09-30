import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  let inquiryType = "";
  let name = "";
  let email = "";
  let phone = "";
  let companyName = "";
  let message = "";

  try {
    const body = await req.json();
    inquiryType = (body.inquiryType || "").trim();
    name = (body.name || "").trim();
    email = (body.email || "").trim();
    phone = (body.phone || "").trim();
    companyName = (body.companyName || "").trim();
    message = (body.message || "").trim();
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  // Input Validation
  const validTypes = ["CONTACT_US", "BOOK_DEMO", "SALES_ENTERPRISE"];
  if (!validTypes.includes(inquiryType)) {
    return NextResponse.json(
      { success: false, message: `Invalid inquiry type. Must be one of: ${validTypes.join(", ")}` },
      { status: 400 }
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Name, email, and message are required fields." },
      { status: 400 }
    );
  }

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address format." },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("customer_inquiries")
      .insert({
        inquiry_type: inquiryType,
        name: name,
        email: email,
        phone: phone || null,
        company_name: companyName || null,
        message: message,
        status: "NEW",
      })
      .select("inquiry_id")
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      inquiryId: data.inquiry_id,
      message: "Inquiry recorded successfully. Our team will contact you shortly.",
    });

  } catch (error) {
    console.error("Error recording customer inquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}
