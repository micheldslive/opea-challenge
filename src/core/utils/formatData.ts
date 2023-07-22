import { type CompanyFormProps } from '@/src/@types';

export const formatData = (body: CompanyFormProps) => {
  const regex = /[^\d]/g;
  return { ...body, cnpj: body.cnpj?.replace(regex, '') || null };
};
