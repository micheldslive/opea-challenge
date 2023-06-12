import { faker } from '@faker-js/faker';
import { type CompanyFormProps } from '@/src//@types';

export const mockBody = (): CompanyFormProps => ({
  email: faker.internet.email(),
  name: faker.internet.userName(),
  cnpj: faker.internet.ipv6()
});
