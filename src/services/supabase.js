// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://pzgjrhajsbqshcoctuzo.supabase.co";
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6Z2pyaGFqc2Jxc2hjb2N0dXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2ODkzNzEsImV4cCI6MjA3OTI2NTM3MX0.o5k1kDhDbWCO-rjEuC41jwF4931b9gIEf1B_stexCFc";

// export default supabase = createClient(supabaseUrl, supabaseAnonKey);



import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
