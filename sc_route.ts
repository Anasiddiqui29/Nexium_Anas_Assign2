import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(req: Request) 
{
  const { url } = await req.json();
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);

  // Naive scraping: fetch all paragraph text
  const text = $('p')
    .map((_, el) => $(el).text())
    .get()
    .join(' ');

  return NextResponse.json({ text });
}