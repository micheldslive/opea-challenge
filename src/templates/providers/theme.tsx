import { darkTheme, styled } from '@/stitches.config';
import { type PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

export const ThemeWrapper = styled('div', {
  background: '$background',
  minHeight: '100vh',
  height: 'fit-content'
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { query } = useRouter();
  return (
    <ThemeWrapper className={query.theme ? darkTheme : ''}>
      {children}
    </ThemeWrapper>
  );
};
