import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { data: blogs, error } = await supabaseAdmin
      .from("blogs")
      .select("slug, title, meta_description, author, published_at")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      blogs: blogs || [],
    });

  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred while retrieving blogs." },
      { status: 500 }
    );
  }
}
