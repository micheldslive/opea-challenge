import { faker } from '@faker-js/faker';

import {
  InvalidCredentialsError,
  UnexpectedError
} from '@/src/core/services/errors';
import { HttpStatusCode } from '@/src/core/types';
import { mockBody, HttpPostClient } from '@/src/core/mocks';
import { RemoteRequest } from '.';

type SutType = {
  httpPostClient: HttpPostClient;
  sut: RemoteRequest;
};

const makeSut = (url: string = faker.internet.url()): SutType => {
  const httpPostClient = new HttpPostClient();
  const sut = new RemoteRequest(url, httpPostClient);
  return {
    httpPostClient,
    sut
  };
};

describe('RemoteRequest', () => {
  const body = mockBody();

  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClient } = makeSut(url);
    await sut.post({ body });
    expect(httpPostClient.url).toBe(url);
  });

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClient } = makeSut();
    await sut.post({ body });
    expect(httpPostClient.body).toEqual(body);
  });

  test('Should throw invalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClient } = makeSut();
    httpPostClient.response.status = HttpStatusCode.unauthorized;
    const promise = sut.post({ body });
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClient } = makeSut();
    httpPostClient.response.status = HttpStatusCode.badRequest;
    const promise = sut.post({ body });
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClient } = makeSut();
    httpPostClient.response.status = HttpStatusCode.notFound;
    const promise = sut.post({ body });
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClient } = makeSut();
    httpPostClient.response.status = HttpStatusCode.serverError;
    const promise = sut.post({ body });
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
