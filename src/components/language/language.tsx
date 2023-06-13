import * as S from './styled';
import { useRouter } from 'next/router';

export const LanguageSelect = () => {
  const { locale } = useRouter();
  const queryParams = new URLSearchParams(window.location.search);
  const changeTo = locale === 'pt' ? 'en' : 'pt';
  return (
    <S.CustomLink
      href={`/?${queryParams.toString()}`}
      locale={changeTo}
      aria-label='language'
    >
      <S.CustomGlobalImage />
      <S.CustomText>{locale}</S.CustomText>
    </S.CustomLink>
  );
};
