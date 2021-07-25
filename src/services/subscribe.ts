import { convertkitApi } from '../config/external/convertkitApi';

export const subscribe = async (email: string) => {
  console.log(process.env.NEXT_PUBLIC_CONVERT_API_PUBLIC);
  return await convertkitApi.post(
    `/forms/2053103/subscribe`,
    { email },
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_CONVERT_API_PUBLIC,
      },
    }
  );
};
