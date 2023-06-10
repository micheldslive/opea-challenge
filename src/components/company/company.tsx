import { useRouter } from 'next/router';
import { type CompanyProps } from '@/src/@types';
import { applyStringMask } from '@/src/core/utils/maskCNPJ';
import { CompanyCard } from '@/src/components';
import * as S from './styled';

export const Company = ({ company }: CompanyProps) => {
  const { pathname, replace } = useRouter();

  const handleEdit = () => {
    const queryParams = new URLSearchParams(window.location.search);

    if (company.id) {
      queryParams.set('edit', String(company.id));
    } else {
      queryParams.delete('edit');
    }

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <CompanyCard
      aria-label={`Edit ${company.name} button`}
      handleClick={handleEdit}
    >
      <S.CompanyIconContent>
        <S.CompanyIcon alt='A gray clipboard icon' />
      </S.CompanyIconContent>
      <S.CompanyInfosContainer>
        <S.CompanyInfo>{company.name}</S.CompanyInfo>
        <S.CompanyInfosContent>
          <S.CompanyInfo>
            CNPJ: {applyStringMask(company.cnpj ?? '', '__.___.___/____-__')}
          </S.CompanyInfo>
          <S.CompanyInfoSeparator> - </S.CompanyInfoSeparator>
          <S.CompanyInfo>Email: {company.email ?? ''}</S.CompanyInfo>
        </S.CompanyInfosContent>
      </S.CompanyInfosContainer>
    </CompanyCard>
  );
};
