import { connectToDatabase } from '../config/mongoClient';

const uri = process.env.API_KEY_MONGODB_URI as string;

export const createEmail = async (email: string) => {
  const newEmail = {
    email,
    sent: false,
    subscribeAt: new Date(),
  };

  const database = await connectToDatabase(uri);

  const { acknowledged } = await database.collection('subscribers').insertOne(newEmail);

  if (!acknowledged) {
    alert('error trying to save email');
  }

  return newEmail;
};
