import { darkTheme, styled } from '@/stitches.config';
import { type PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

export const ThemeWrapper = styled('div', {
  background: '$background',
  height: '100vh'
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { query } = useRouter();
  return (
    <ThemeWrapper className={query.theme ? darkTheme : ''}>
      {children}
    </ThemeWrapper>
  );
};
