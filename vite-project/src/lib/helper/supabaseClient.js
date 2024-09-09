import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://fzfclqrriiayqoksscrj.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZmNscXJyaWlheXFva3NzY3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ3MDMsImV4cCI6MjA0MTQ4MDcwM30.65TCADIvNPaqcx8bm3h-oydnpGOvv5uBG9ZLdEXa8bU"
);

export default supabase;
