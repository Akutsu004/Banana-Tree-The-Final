import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eijwdnkkpbiirvyzmnqu.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpandkbmtrcGJpaXJ2eXptbnF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NDkyOTQsImV4cCI6MjA3NTMyNTI5NH0.RVWnyOfhtOyiO7V_agud6rZdcRESB1rSQxkbRLLcUBc'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);