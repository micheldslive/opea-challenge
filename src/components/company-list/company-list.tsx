import { Fragment } from 'react';
import { useCompany } from '@/src/core/hooks';
import { Company, NewCompany } from '@/src/components';
import * as S from './styled';

export const CompanyList = () => {
  const { companyList } = useCompany();
  return (
    <S.CompanyListContent>
      <NewCompany />
      {companyList?.map(company => {
        return (
          <Fragment key={company.id}>
            <Company company={company} />
          </Fragment>
        );
      })}
    </S.CompanyListContent>
  );
};
