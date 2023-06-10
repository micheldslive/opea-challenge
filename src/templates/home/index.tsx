import { SearchBar, CompanyList, CompanyFormModal } from '@/src/components';
import { CompanyFormProvider } from '@/src/core/hooks';
import * as S from './styled';

export const HomeTemplate = () => {
  return (
    <S.HomeLayout>
      <SearchBar />
      <CompanyList />
      <CompanyFormProvider>
        <CompanyFormModal />
      </CompanyFormProvider>
    </S.HomeLayout>
  );
};
