import * as S from './styled';

export const Header = () => (
  <S.Header>
    <S.HeaderContainter>
      <S.OpeaLogo />
      <S.UserLink
        href='https://www.linkedin.com/in/micheldslive/'
        target='_blank'
      >
        <S.UserName>micheldslive</S.UserName>
        <S.UserImage />
      </S.UserLink>
    </S.HeaderContainter>
  </S.Header>
);
