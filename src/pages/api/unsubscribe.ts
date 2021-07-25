import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

async function unsubscribe(request: VercelRequest, response: VercelResponse) {
  const unsubscribeResponse = await axios.put(
    'https://api.convertkit.com/v3/unsubscribe',
    { email: 'willianleman@hotmail.com' },
    { params: { api_secret: process.env.API_KEY_CONVERT_API_SECRET } }
  );

  console.log(unsubscribeResponse);
  return response.json(unsubscribeResponse);
}

export default unsubscribe;
