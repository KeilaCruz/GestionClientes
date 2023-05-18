import { createClient } from "@supabase/supabase-js"

const projectUrl = "https://zsahculqapbodphctogs.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzYWhjdWxxYXBib2RwaGN0b2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNzkzNzYsImV4cCI6MTk5OTc1NTM3Nn0.-xOxOBDGTPn9P8_zqLpLn_IgEC0R7jCeozV0Kz3hFK0";

export const supabase = createClient(projectUrl,projectKey);