import axios from 'axios';

export const convertkitApi = axios.create({
  baseURL: 'https://api.convertkit.com/v3',
});
