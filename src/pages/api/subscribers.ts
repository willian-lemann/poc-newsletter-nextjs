import axios from 'axios';
import { VercelRequest, VercelResponse } from '@vercel/node';

async function getSubscribes(request: VercelRequest, response: VercelResponse) {
  const { data: subscribers } = await axios.get('https://api.convertkit.com/v3/subscribers', {
    params: {
      api_secret: process.env.API_KEY_CONVERT_API_SECRET,
    },
  });

  return response.json(subscribers);
}

export default getSubscribes;
