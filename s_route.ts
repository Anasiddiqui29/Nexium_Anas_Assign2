import { NextResponse } from 'next/server';
import { saveToMongo } from '../../../data/mongo';
import { saveToSupabase } from '../../../data/supabase';

export async function POST(req: Request) 
{
  const { fullText, summary, urduSummary } = await req.json();
  await saveToMongo(fullText);
  await saveToSupabase(summary, urduSummary);
  return NextResponse.json({ status: 'saved' });
}