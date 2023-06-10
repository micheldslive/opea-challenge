import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CompanyAPI } from '@/src/core/schemas/company';
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import { useMemo } from 'react';
import { type CompanyFormProps } from '@/src/@types';
import { useTranslation } from 'next-i18next';

export const companyListKey = ['company-list'];
export const limit = 12;
const baseURL = process.env.NEXT_APP_BASE_URL;

export const useCompany = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { query } = useRouter();

  const {
    data: companyList,
    isLoading,
    isError
  } = useQuery(
    [...companyListKey, { search: query.search ?? '' }],
    () =>
      fetch(`${baseURL}${query.search ? `?text=${query.search}` : ''}`).then(
        async response => {
          const data = await response.json();

          const info = CompanyAPI.safeParse(data);

          return info.success ? info.data : [];
        }
      ),
    {
      cacheTime: 6000,
      staleTime: 6000
    }
  );

  const { mutate: deleteCompany } = useMutation(
    (id: string) =>
      fetch(`${baseURL}/${id}`, {
        body: JSON.stringify({ id }),
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(companyListKey);
        toast.success(t('company.messages.delete.sucess'));
      },
      onError: () => {
        toast.error(t('company.messages.delete.error'));
      }
    }
  );

  const { mutate: createCompany } = useMutation(
    (body: CompanyFormProps) =>
      fetch(`${baseURL}`, {
        body: JSON.stringify({ ...body }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: (__, variables) => {
        void queryClient.invalidateQueries(companyListKey);
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
    ({ body, id }: { body: CompanyFormProps; id: string }) =>
      fetch(`${baseURL}/${id}`, {
        body: JSON.stringify({ ...body }),
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: (__, variables) => {
        void queryClient.invalidateQueries(companyListKey);
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
      companyList?.slice(
        (+String(query?.page ?? 1) - 1) * limit,
        +String(query?.page ?? 1) * limit
      ),
    [companyList, query]
  );

  const totalPages = useMemo(
    () => Math.ceil((companyList?.length ?? 1) / limit),
    [companyList]
  );

  return {
    companyList,
    paginatedData,
    totalPages,
    isError,
    isLoading,
    deleteCompany,
    createCompany,
    updateCompany
  };
};