import { Company, SearchBar } from '@/src/components';
import * as S from './styled';

export const HomeTemplate = () => {
  return (
    <S.HomeLayout>
      <SearchBar />
      <Company
        company={{
          id: '1',
          cnpj: '08289219466',
          email: 'micheldslive@gmail.com',
          name: 'Michel'
        }}
        position={1}
      />
    </S.HomeLayout>
  );
};
