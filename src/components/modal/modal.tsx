import { useCompany } from '@/src/core/hooks/useCompany';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { Input } from '@/src/components/input';
import * as S from './styled';
import { useFormContext, type SubmitHandler } from 'react-hook-form';
import type { CompanyFormProps } from '@/src/@types';

export const CompanyFormModal = () => {
  const { handleSubmit } = useFormContext<CompanyFormProps>();

  const onSubmit: SubmitHandler<CompanyFormProps> = body => {
    updateCompany({ body, id: String(cleanedData.id ?? '') });

    const queryParams = new URLSearchParams(window.location.search);

    queryParams.delete('edit');

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  const { query, replace, pathname } = useRouter();

  const open = !!query.edit;

  const { companyList, updateCompany, deleteCompany } = useCompany();

  const cleanedData = useMemo(() => {
    const clean = { id: '', name: '', cnpj: '', email: '' };
    if (!companyList) return clean;

    const choosenItem = companyList?.at(+Number(query?.edit));

    if (choosenItem) {
      return choosenItem;
    }

    return clean;
  }, [companyList, query.edit]);

  const clearEdit = useCallback(() => {
    const queryParams = new URLSearchParams(window.location.search);

    queryParams.delete('edit');

    void replace(`${pathname}?${queryParams.toString()}`);
  }, [pathname, replace]);

  return (
    <S.ModalContent open={open}>
      <S.ModalContainer onClick={clearEdit}></S.ModalContainer>
      <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
        <S.ModalHeader>
          <S.ModalHeaderTitle>Editar Empresa</S.ModalHeaderTitle>
          <S.ModalHeaderCloseButton
            type='reset'
            aria-label='modal-icon-close'
            onClick={clearEdit}
          >
            <S.ModalHeaderCloseIcon />
          </S.ModalHeaderCloseButton>
        </S.ModalHeader>
        <S.ModalFormContent>
          <Input
            name='name'
            label='Nome'
            placeholder='Digite o nome'
            defaultValue={cleanedData.name}
          />
          <Input
            name='cnpj'
            label='CNPJ'
            placeholder='Digite o CNPJ'
            defaultValue={cleanedData.cnpj}
            maxLength={14}
          />
          <Input
            name='email'
            label='E-mail'
            placeholder='Digite o e-mail'
            defaultValue={cleanedData.email}
            type='email'
          />
        </S.ModalFormContent>
        <div className='flex items-center justify-between px-6'>
          <button
            name='modal-delete'
            type='reset'
            className='rounded-opea border-2 border-gray-button p-1.5 hover:opacity-80'
            onClick={() => {
              deleteCompany(String(cleanedData.id || ''));
              clearEdit();
            }}
          >
            <Image
              src='/images/delete-icn.svg'
              width={16}
              height={19}
              alt='A trash can'
            />
          </button>
          <div className='flex gap-4'>
            <button
              type='reset'
              className='rounded-opea border-2 border-gray-input px-3 py-2 tracking-wide text-gray-helper hover:opacity-80'
              aria-label='modal-cancel'
              onClick={clearEdit}
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='rounded-opea border-2 border-transparent bg-wine-brand px-3 py-2 tracking-wide text-white transition-all duration-300 hover:border-wine-brand hover:bg-transparent hover:text-wine-brand'
              aria-label='modal-confirm'
            >
              Confirmar
            </button>
          </div>
        </div>
      </S.ModalForm>
    </S.ModalContent>
  );
};
