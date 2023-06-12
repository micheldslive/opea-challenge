import type { CompanyAPIProps, CompanyListBody } from '@/src/@types';
import { RemoteRequest } from '@/src/core/services/http-request';
import { PostClient } from '@/src/core/services/post-client';
import { type HttpResponse } from '@/src/core/types';

export class Api {
  getCompanys = async (
    text?: string | string[]
  ): Promise<CompanyAPIProps[]> => {
    const remoteRequest = new RemoteRequest(`?text=${text}`, new PostClient());
    const response = await remoteRequest.get();
    return response?.data;
  };

  deleteCompany = async (id: string): Promise<HttpResponse['status']> => {
    const remoteRequest = new RemoteRequest(`/${id}`, new PostClient());
    const response = await remoteRequest.delete();
    return response.status;
  };

  createCompany = async (
    body: CompanyListBody
  ): Promise<HttpResponse['status']> => {
    const remoteRequest = new RemoteRequest('/', new PostClient());
    const response = await remoteRequest.post(body);
    return response.status;
  };

  updateCompany = async (
    id: string,
    body: CompanyListBody
  ): Promise<HttpResponse['status']> => {
    const remoteRequest = new RemoteRequest(`/${id}`, new PostClient());
    const response = await remoteRequest.put(body);
    return response.status;
  };
}
