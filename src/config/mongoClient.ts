import { MongoClient, Db } from 'mongodb';
import parseUrl from 'url-parse';

let cachedDb: Db;

export async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const databaseName = parseUrl(uri).pathname.substring(1);

  const database = client.db(databaseName);

  cachedDb = database;

  return database;
}
