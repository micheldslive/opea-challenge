import {
  SearchBar,
  CompanyList,
  CompanyFormModal,
  Pagination,
  LanguageSelect,
  Themming
} from '@/src/components';
import { CompanyFormProvider } from '@/src/core/hooks';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import * as S from './styled';

export const HomeTemplate = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('pages.home.title')}</title>
        <meta content={t('pages.home.title')} property='og:title' />
        <meta content={t('pages.home.description')} name='description' />
        <meta content={t('pages.home.description')} property='og:description' />
        <meta
          content='https://opea-challenge-micode.vercel.app/'
          property='og:url'
        />
      </Head>
      <S.HomeLayout>
        <S.HomeContainer>
          <Pagination />
          <S.HomerContent>
            <LanguageSelect />
            <Themming />
          </S.HomerContent>
          <SearchBar />
        </S.HomeContainer>
        <CompanyList />
        <CompanyFormProvider>
          <CompanyFormModal />
        </CompanyFormProvider>
      </S.HomeLayout>
    </>
  );
};
