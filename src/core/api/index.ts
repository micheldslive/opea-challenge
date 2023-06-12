import axios from 'axios';

const getAPIClient = () => {
  const baseURL = process.env.BASE_URL;

  const api = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json'
    }
  });

  return api;
};

export const api = getAPIClient();
