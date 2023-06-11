import * as S from './styled';
import { useRouter } from 'next/router';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { type SearchBarProps } from '@/src/@types';

export const SearchBar = () => {
  const { pathname, replace, query } = useRouter();
  const { t } = useTranslation();

  const { handleSubmit, register } = useForm<SearchBarProps>();

  const onSubmit: SubmitHandler<SearchBarProps> = ({ search }) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (search) {
      queryParams.set('search', search);
    } else {
      queryParams.delete('search');
    }
    queryParams.delete('page');

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <S.SearchBarContainer>
      <S.SearchBarForm
        onSubmit={handleSubmit(onSubmit)}
        aria-label='search-bar'
      >
        <S.SearchBarInput
          placeholder={t('components.search.placeholder')}
          defaultValue={String(query?.search ?? '')}
          {...register('search')}
        />
        <S.SearchBarButton>
          <S.SearchBarIcon />
        </S.SearchBarButton>
      </S.SearchBarForm>
    </S.SearchBarContainer>
  );
};
