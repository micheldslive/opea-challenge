import { type ApiProps } from '@/src/@types';

export const api: ApiProps = ({ id, method, body }) => {
  const baseURL = process.env.BASE_URL;
  return fetch(`${baseURL}${id ? `/${id}` : ''}`, {
    body: body ? JSON.stringify({ ...body }) : JSON.stringify({ id }),
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
