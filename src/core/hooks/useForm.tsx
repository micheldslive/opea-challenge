import { type PropsWithChildren } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CompanyForm } from '../schemas';
import type { CompanyFormProps } from '@/src/@types';

export const CompanyFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<CompanyFormProps>({
    resolver: zodResolver(CompanyForm),
    mode: 'all'
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
