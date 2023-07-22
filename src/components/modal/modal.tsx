import { useModalForm } from '@/src/core/hooks';
import { Input, InputCNPJ } from '@/src/components';
import { useTranslation } from 'next-i18next';
import * as S from './styled';

export const CompanyFormModal = () => {
  const {
    open,
    isEdit,
    company,
    handleClearQuerys,
    onDelete,
    handleSubmit,
    onSubmit
  } = useModalForm();

  const { t } = useTranslation();
  return (
    <S.ModalContent open={open}>
      <S.ModalContainer onClick={handleClearQuerys}></S.ModalContainer>
      <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
        <S.ModalHeader>
          <S.ModalHeaderTitle>
            {isEdit ? t('company.modal.update') : t('company.modal.create')}
          </S.ModalHeaderTitle>
          <S.ModalHeaderCloseButton
            type='reset'
            aria-label='modal-icon-close'
            onClick={handleClearQuerys}
          >
            <S.ModalHeaderCloseIcon />
          </S.ModalHeaderCloseButton>
        </S.ModalHeader>
        <S.ModalFormContent>
          <Input
            name='name'
            label={t('company.modal.label.name')}
            placeholder={t('company.modal.placeholder.name')}
            defaultValue={company?.name || ''}
          />
          <InputCNPJ
            name='cnpj'
            label={t('company.modal.label.cnpj')}
            placeholder={t('company.modal.placeholder.cnpj')}
            defaultValue={company?.cnpj || ''}
          />
          <Input
            name='email'
            label={t('company.modal.label.email')}
            placeholder={t('company.modal.placeholder.email')}
            defaultValue={company?.email || ''}
            type='email'
          />
        </S.ModalFormContent>
        <S.ModalFooterContent>
          {isEdit && (
            <S.ModalFooterDelete
              name='modal-delete'
              type='reset'
              onClick={onDelete}
            >
              <S.ModalFooterDeleteIcon alt='A trash can' />
            </S.ModalFooterDelete>
          )}
          <S.ModalFooterButtons>
            <S.ModalFooterCancelConfirm
              type='button'
              variant='default'
              aria-label='modal-cancel'
              onClick={handleClearQuerys}
            >
              {t('company.modal.cancel')}
            </S.ModalFooterCancelConfirm>
            <S.ModalFooterCancelConfirm
              type='submit'
              variant='wine'
              aria-label='modal-confirm'
            >
              {t('company.modal.confirm')}
            </S.ModalFooterCancelConfirm>
          </S.ModalFooterButtons>
        </S.ModalFooterContent>
      </S.ModalForm>
    </S.ModalContent>
  );
};
