import { i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useOpeaStore } from '@/src/core/store';

export const useChangeLanguage = () => {
  const { setLanguage } = useOpeaStore();
  const { push, pathname, query, asPath } = useRouter();

  const changeLanguage = useCallback(async (locale: string) => {
    setLanguage(locale);
    await i18n?.changeLanguage(locale);
    void push({ pathname, query }, asPath, {
      locale
    });
  }, []);

  return { changeLanguage };
};
