import { createClient } from "@supabase/supabase-js";

const defaultUrl = "https://placeholder.supabase.co";
const defaultKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.placeholder";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || defaultUrl;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultKey;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || defaultKey;

if (!process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.SUPABASE_URL) {
  console.warn("Supabase URL is missing from environment variables. Running in mock/fallback mode.");
}

// Public client (runs on both client and server)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client (runs ONLY on the server side - strictly checked)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);
