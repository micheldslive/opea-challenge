import { AnimatePageTransition } from '@/src/templates';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { Header } from '@/src/components';
import { Toaster } from 'sonner';
import { type AppProps } from 'next/app';
import { ThemeProvider } from '../templates/providers';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AnimatePageTransition>
          <Toaster position='top-right' richColors />
          <Header />
          <Component {...pageProps} />
        </AnimatePageTransition>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default appWithTranslation(MyApp);
