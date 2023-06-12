import type {
  CompanyAPIProps,
  CompanyListBody,
  GetCompanys
} from '@/src/@types';
import { RemoteRequest } from '@/src/core/services/http-request';
import { PostClient } from '@/src/core/services/post-client';
import { type HttpResponse } from '@/src/core/types';

export class Api {
  getCompanys = async (params: GetCompanys): Promise<CompanyAPIProps[]> => {
    const remoteRequest = new RemoteRequest('/', new PostClient());
    const response = await remoteRequest.get(params);
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
