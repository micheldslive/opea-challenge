import { type HttpRequestParams } from '@/src/core/types';
import { api } from '@/src/core/api';

export class PostClient {
  async post({ url, body }: HttpRequestParams) {
    return await api.post(url, body);
  }

  async get({ url, body }: HttpRequestParams) {
    return await api.get(url, body);
  }

  async put({ url, body }: HttpRequestParams) {
    return await api.put(url, body);
  }

  async delete({ url, body }: HttpRequestParams) {
    return await api.delete(url, body);
  }
}
