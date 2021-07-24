import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import parseUrl from 'url-parse';
import schedule from 'node-schedule';
import { sendEmailJob } from '../../jobs/sendEmailJob';

let cachedDb: Db;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const databaseName = parseUrl(uri).pathname.substring(1);

  const database = client.db(databaseName);

  cachedDb = database;

  return database;
}

async function subscribe(request: VercelRequest, response: VercelResponse) {
  const { email } = request.body;

  const database = await connectToDatabase(process.env.API_KEY_MONGODB_URI as string);

  const collection = database.collection('subscribers');

  await collection.insertOne({ email, subscribeAt: new Date() });

  const subscribersDocument = await database.collection('subscribers').find().toArray();

  const emails = subscribersDocument.map((item) => item.email as string);

  sendEmailJob(emails);

  return response.status(201).json({ email });
}

export default subscribe;
