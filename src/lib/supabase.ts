import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl) {
  console.warn("Supabase URL is missing from environment variables.");
}

// Public client (runs on both client and server)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client (runs ONLY on the server side - strictly checked)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey || supabaseAnonKey, // Fallback to avoid crash if service key is missing during build
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);
