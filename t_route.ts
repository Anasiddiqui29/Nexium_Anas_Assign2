import { NextResponse } from 'next/server';
import { urduDictionary } from '../../../data/dictionary';

export async function POST(req: Request) 
{
  const { summary } = await req.json();

  const words: string[] = summary.split(/\s+/);
  const translated = words
    .map((word: string) => urduDictionary[word.toLowerCase()] || word)
    .join(' ');

  return NextResponse.json({ urduSummary: translated });
}
