import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://grupiyemuixzlezmscee.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdydXBpeWVtdWl4emxlem1zY2VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNDc1ODMsImV4cCI6MjAyNzYyMzU4M30.3mOhtdR6RNVfER4vK0UacprvhdTvAB-L_0HHeoKPcpo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
