import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useFormContext, type SubmitHandler } from 'react-hook-form';
import type { CompanyFormProps } from '@/src/@types';
import { formatBody } from '@/src/core/utils';
import { useCompany } from '.';

export const useModalForm = () => {
  const { query, replace, pathname } = useRouter();
  const { companyList, deleteCompany, updateCompany, createCompany } =
    useCompany();
  const { handleSubmit } = useFormContext<CompanyFormProps>();

  const isEdit = !!query.edit;
  const open = isEdit || !!query.create;

  const company = useMemo(
    () => companyList?.find(company => company.id === query?.edit),

    [companyList, query.edit]
  );

  const onSubmit: SubmitHandler<CompanyFormProps> = body => {
    const formatedBody = formatBody(body);
    query.edit
      ? updateCompany({ body: formatedBody, id: String(company?.id) })
      : createCompany(formatedBody);

    const queryParams = new URLSearchParams(window.location.search);

    queryParams.delete('edit');
    queryParams.delete('create');

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  const onDelete = () => {
    deleteCompany(String(company?.id));
    onClear();
  };

  const onClear = useCallback(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete('edit');
    queryParams.delete('create');
    void replace(`${pathname}?${queryParams.toString()}`);
  }, [pathname, replace]);

  return {
    open,
    isEdit,
    company,
    onSubmit,
    onDelete,
    onClear,
    handleSubmit,
    deleteCompany
  };
};
