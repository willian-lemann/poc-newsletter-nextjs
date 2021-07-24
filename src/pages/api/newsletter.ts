import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import parseUrl from 'url-parse';

async function connectToDatabase(uri: string) {
  const client = await MongoClient.connect(uri);

  const databaseName = parseUrl(uri).pathname.substring(1);

  const database = client.db(databaseName);

  return database;
}

async function subscribe(request: VercelRequest, response: VercelResponse) {
  const { email } = request.body;

  const database = await connectToDatabase(process.env.MONGODB_URI as string);

  const collection = await database.collection('subscribers');

  await collection.insertOne({ email, subscribeAt: new Date() });

  return response.status(201).json({ email });
}

export default subscribe;
