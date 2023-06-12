import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Api } from '../services/http-request';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { toast } from 'sonner';
import { type CompanyFormProps } from '@/src/@types';
import { useMemo } from 'react';

const amount = Number(process.env.AMOUNT);
export const companyKey = process.env.COMPANY_KEY;

export const useCompany = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { query } = useRouter();

  const search = useMemo(() => query.search ?? '', [query.search]);

  const api = new Api();

  const { data, isLoading, isError } = useQuery(
    [companyKey, { search }],
    () => api.getCompanys(search),
    {
      cacheTime: 6000,
      staleTime: 6000
    }
  );

  const { mutate: deleteCompany } = useMutation(
    (id: string) => api.deleteCompany(id),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries([companyKey]);
        toast.success(t('company.messages.delete.sucess'));
      },
      onError: () => {
        toast.error(t('company.messages.delete.error'));
      }
    }
  );

  const { mutate: createCompany } = useMutation(
    (body: CompanyFormProps) => api.createCompany({ body }),
    {
      onSuccess: (__, variables) => {
        void queryClient.invalidateQueries([companyKey]);
        toast.success(
          t('company.messages.create.sucess', {
            name: variables.name
          })
        );
      },

      onError: () => {
        toast.error(t('company.messages.create.error'));
      }
    }
  );

  const { mutate: updateCompany } = useMutation(
    ({ id, body }: { id: string; body: CompanyFormProps }) =>
      api.updateCompany(id, { body }),
    {
      onSuccess: (__, variables) => {
        void queryClient.invalidateQueries([companyKey]);
        toast.success(
          t('company.messages.update.sucess', {
            name: variables.body.name
          })
        );
      },
      onError: () => {
        toast.error(t('company.messages.update.error'));
      }
    }
  );

  const paginatedData = useMemo(
    () =>
      data?.slice(
        (+String(query?.page ?? 1) - 1) * amount,
        +String(query?.page ?? 1) * amount
      ),
    [data, query]
  );

  const totalPages = useMemo(
    () => Math.ceil((data?.length ?? 1) / amount),
    [data]
  );

  return {
    companyList: data,
    paginatedData,
    totalPages,
    isError,
    isLoading,
    createCompany,
    updateCompany,
    deleteCompany
  };
};
