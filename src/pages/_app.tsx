import { AnimatePageTransition } from '@/src/templates';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { useOpeaStore } from '@/src/core/store';
import { useChangeLanguage } from '@/src/core/hooks';
import { appWithTranslation } from 'next-i18next';
import { Header } from '@/src/components';
import { Toaster } from 'sonner';
import { type AppProps } from 'next/app';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <AnimatePageTransition>
        <Toaster position='top-right' richColors />
        <Header />
        <Component {...pageProps} />
      </AnimatePageTransition>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default appWithTranslation(MyApp);
