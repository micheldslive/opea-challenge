import {
  type HttpPost,
  type HttpRequestParams,
  type HttpResponse,
  HttpStatusCode
} from '@/src/core/types';

export class HttpPostClient implements HttpPost {
  url?: string;
  body?: object;
  response: HttpResponse = {
    status: HttpStatusCode.ok,
    data: undefined,
    statusText: '',
    headers: {},
    config: {} as never
  };

  async post(params: HttpRequestParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }

  async get(params: HttpRequestParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
  async put(params: HttpRequestParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }

  async delete(params: HttpRequestParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
