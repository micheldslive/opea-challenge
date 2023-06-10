import { AnimatePageTransition } from '@/src/templates';
import { type AppType } from 'next/dist/shared/lib/utils';
import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { useOpeaStore } from '@/src/core/store';
import { CompanyFormProvider, useChangeLanguage } from '@/src/core/hooks';
import { appWithTranslation } from 'next-i18next';
import { Header } from '../components';
import { Toaster } from 'sonner';
import { CompanyFormModal } from '../components/modal';

const queryClient = new QueryClient();

const MyApp: AppType<{ dehydratedState: DehydratedState }> = ({
  Component,
  pageProps
}) => {
  const [mounted, setMounted] = useState(false);
  const { changeLanguage } = useChangeLanguage();
  const { locale } = useOpeaStore();

  useEffect(() => {
    setMounted(true);
    void changeLanguage(locale);
  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AnimatePageTransition>
          <Toaster position='top-right' richColors />
          <Header />
          <CompanyFormProvider>
            <CompanyFormModal />
          </CompanyFormProvider>
          <Component {...pageProps} />
        </AnimatePageTransition>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default appWithTranslation(MyApp);
