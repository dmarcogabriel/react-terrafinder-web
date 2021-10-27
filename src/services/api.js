import axios from 'axios';
import { USER_KEY } from 'constants/userKey';

const api = axios.create({ baseURL: process.env.REACT_APP_BACKEND });

api.interceptors.request.use((config) => {
  const user = localStorage.getItem(USER_KEY);

  const { headers } = config;
  if (user) headers['x-access-token'] = JSON.parse(user).token;

  return {
    ...config,
    headers,
  };
});

export default api;
