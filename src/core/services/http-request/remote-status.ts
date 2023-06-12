import { HttpStatusCode, type HttpResponse } from '@/src/core/types';
import {
  InvalidCredentialsError,
  UnexpectedError
} from '@/src/core/services/errors';

export const httpResponseStatus = (httpResponse: HttpResponse) => {
  switch (httpResponse.status) {
    case HttpStatusCode.ok:
      return httpResponse;
    case HttpStatusCode.badRequest:
      throw new UnexpectedError(httpResponse.statusText);
    case HttpStatusCode.unauthorized:
      throw new InvalidCredentialsError();
    default:
      throw new UnexpectedError();
  }
};
