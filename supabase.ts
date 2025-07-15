import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveToSupabase(summary: string, urduSummary: string) 
{
  await supabase.from("summaries").insert({
    summary,
    urdu_summary: urduSummary,
    created_at: new Date().toISOString()
  });
}