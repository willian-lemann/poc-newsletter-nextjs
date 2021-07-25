import { VercelRequest, VercelResponse } from '@vercel/node';

import { createEmail } from '../../services';

async function subscribe(request: VercelRequest, response: VercelResponse) {
  const { email } = request.body;

  console.log(email);
  const createdEmail = await createEmail(email);

  console.log(createdEmail);
  return response.status(201).json(createdEmail);
}

export default subscribe;
