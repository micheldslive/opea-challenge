import { useMemo } from 'react';
import { useFormContext, type SubmitHandler } from 'react-hook-form';
import type { CompanyFormProps } from '@/src/@types';
import { formatData } from '@/src/core/utils';
import { useCompany } from '.';

export const useModalForm = () => {
  const {
    query,
    companyList,
    deleteCompany,
    updateCompany,
    createCompany,
    handleClearQuerys
  } = useCompany();
  const { handleSubmit } = useFormContext<CompanyFormProps>();

  const { edit, create } = query;

  const company = useMemo(
    () => companyList?.find(company => company.id === edit),

    [companyList, edit]
  );

  const onSubmit: SubmitHandler<CompanyFormProps> = data => {
    const body = formatData(data);
    edit
      ? updateCompany({ body, id: String(company?.id) })
      : createCompany(body);
  };

  const onDelete = () => {
    deleteCompany(String(company?.id));
  };

  return {
    open: !!edit || !!create,
    isEdit: !!edit,
    company,
    onSubmit,
    onDelete,
    handleClearQuerys,
    handleSubmit,
    deleteCompany
  };
};
