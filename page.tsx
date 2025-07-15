'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [url, setUrl] = useState('');
  const [fullText, setFullText] = useState('');
  const [summary, setSummary] = useState('');
  const [urduSummary, setUrduSummary] = useState('');

  /*async function handleSummarise() {
    const scrapeRes = await fetch('/api/scrape', {
      method: 'POST',
      body: JSON.stringify({ url }),
    });
    const { text } = await scrapeRes.json();
    setFullText(text);

    const summaryRes = await fetch('/api/summarise', {
      method: 'POST',
      body: JSON.stringify({ text }),
    });
    const { summary } = await summaryRes.json();
    setSummary(summary);

    const urduRes = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({ summary }),
    });
    const { urduSummary } = await urduRes.json();
    setUrduSummary(urduSummary);
  }*/
 async function handleSummarise() {
  try {
    // Step 1: Scrape
    const scrapeRes = await fetch('/api/scrape', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    if (!scrapeRes.ok) {
      throw new Error('Scrape API failed');
    }

    const scrapeData: { text: string } = await scrapeRes.json();
    const text = scrapeData.text;
    setFullText(text);

    // Step 2: Summarise
    const summaryRes = await fetch('/api/summarise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!summaryRes.ok) {
      throw new Error('Summary API failed');
    }

    const summaryData: { summary: string } = await summaryRes.json();
    const summary = summaryData.summary;
    setSummary(summary);

    // Step 3: Translate
    const urduRes = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ summary }),
    });

    if (!urduRes.ok) {
      throw new Error('Translate API failed');
    }

    const urduData: { urduSummary: string } = await urduRes.json();
    setUrduSummary(urduData.urduSummary);

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error during summarise flow:', error.message);
      alert('Something went wrong. Check console for details.');
    } else {
      console.error('Unknown error occurred');
    }
  }
}


  async function handleSave() {
    await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({ fullText, summary, urduSummary }),
    });
    alert('Saved!');
  }

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Blog Summariser</h1>
      <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter blog URL..." />
      <Button onClick={handleSummarise}>Summarise</Button>
      {summary && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Summary (English)</h2>
          <p>{summary}</p>
          <h2 className="text-xl font-semibold">Summary (Urdu)</h2>
          <p>{urduSummary}</p>
          <Button onClick={handleSave}>Save</Button>
        </div>
      )}
    </main>
  );
}

  
