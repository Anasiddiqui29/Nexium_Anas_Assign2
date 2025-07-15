import { NextResponse } from 'next/server';

export async function POST(req: Request) 
{
  const { text } = await req.json();
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  const summary = sentences.slice(0, 3).join(' '); // Take first 3 sentences
  return NextResponse.json({ summary });
}

