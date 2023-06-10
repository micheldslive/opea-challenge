import { z } from 'zod';

export const RegexCNPJ = /[0-9]/g;

export const CompanyForm = z.object({
  name: z.string().min(1, { message: 'components.zod.name.min' }).nullable(),
  email: z.string().min(1, { message: 'components.zod.email.min' }).nullable(),
  cnpj: z
    .string()
    .min(1, { message: 'components.zod.cnpj.min' })
    .length(18, { message: 'components.zod.cnpj.max' })
    .nullable()
});

export const CompanyAPI = z.array(
  z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    cnpj: z.string().nullable()
  })
);
