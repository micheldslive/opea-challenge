import { useCompany } from '@/src/core/hooks';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useFormContext, type SubmitHandler } from 'react-hook-form';
import type { CompanyFormProps } from '@/src/@types';
import { formatBody } from '@/src/core/utils';

export const useModalForm = () => {
  const { query, replace, pathname } = useRouter();
  const { companyList, updateCompany, deleteCompany, createCompany } =
    useCompany();
  const { handleSubmit } = useFormContext<CompanyFormProps>();

  const isEdit = !!query.edit;
  const open = isEdit || !!query.create;

  const cleanedData = useMemo(() => {
    const clean = { id: '', name: '', cnpj: '', email: '' };
    if (!companyList) return clean;

    const choosenItem = companyList?.find(
      company => company.id === query?.edit
    );

    if (choosenItem) {
      return choosenItem;
    }

    return clean;
  }, [companyList, query.edit]);

  const onSubmit: SubmitHandler<CompanyFormProps> = body => {
    const formatedBody = formatBody(body);
    query.edit
      ? updateCompany({ body: formatedBody, id: String(cleanedData.id ?? '') })
      : createCompany(formatedBody);

    const queryParams = new URLSearchParams(window.location.search);

    queryParams.delete('edit');
    queryParams.delete('create');

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  const onDelete = () => {
    deleteCompany(String(cleanedData.id || ''));
    clearModal();
  };

  const clearModal = useCallback(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete('edit');
    queryParams.delete('create');
    void replace(`${pathname}?${queryParams.toString()}`);
  }, [pathname, replace]);

  return {
    open,
    isEdit,
    cleanedData,
    onSubmit,
    onDelete,
    clearModal,
    handleSubmit,
    deleteCompany
  };
};
