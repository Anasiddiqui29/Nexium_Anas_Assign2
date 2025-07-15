import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function saveToMongo(blogText: string) 
{
  await client.connect();
  const db = client.db("BlogSummariserDB");
  const collection = db.collection("blogs");
  await collection.insertOne({ text: blogText, createdAt: new Date() });
}
