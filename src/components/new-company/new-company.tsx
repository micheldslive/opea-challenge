import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CompanyCard } from '@/src/components';
import * as S from './styled';

export const NewCompany = () => {
  const { pathname, replace } = useRouter();
  const { t } = useTranslation();

  const handleEdit = () => {
    const queryParams = new URLSearchParams(window.location.search);

    queryParams.set('create', 'new');

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <CompanyCard
      aria-label={`Create new button`}
      handleClick={handleEdit}
      transparent
    >
      <S.CompanyIconContent>
        <S.CompanyIcon alt='A gray clipboard icon' />
      </S.CompanyIconContent>
      <S.CompanyInfosContainer>
        <S.CompanyInfo>{t('company.new.title')}</S.CompanyInfo>
      </S.CompanyInfosContainer>
    </CompanyCard>
  );
};
