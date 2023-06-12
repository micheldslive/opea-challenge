import * as S from './styled';
import { useRouter } from 'next/router';

export const Themming = () => {
  const { pathname, replace, query } = useRouter();

  const handleChangeTheme = () => {
    const queryParams = new URLSearchParams(window.location.search);

    if (query.theme) {
      queryParams.delete('theme');
    } else {
      queryParams.set('theme', 'dark');
    }

    void replace(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <S.ThemeButton onClick={handleChangeTheme} aria-label='themming'>
      {query.theme === 'dark' ? <S.Moon /> : <S.Sun />}
    </S.ThemeButton>
  );
};
