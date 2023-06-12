import { type HttpPost, type HttpResponse } from '@/src/core/types';
import { type CompanyListBody } from '@/src/@types';
import { httpResponseStatus } from './remote-status';

export class RemoteRequest {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPost
  ) {}

  async post({ body }: CompanyListBody): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body
    });

    return httpResponseStatus(httpResponse);
  }

  async get(): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.get({
      url: this.url
    });

    return httpResponseStatus(httpResponse);
  }

  async put({ body }: CompanyListBody): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.put({
      url: this.url,
      body
    });

    return httpResponseStatus(httpResponse);
  }

  async delete(): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.delete({
      url: this.url
    });

    return httpResponseStatus(httpResponse);
  }
}
