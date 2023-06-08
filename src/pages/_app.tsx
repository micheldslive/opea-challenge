import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { AnimatePageTransition } from '@/src/app/templates';

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePageTransition>
      <Component {...pageProps} />
    </AnimatePageTransition>
  );
}

export default App;
