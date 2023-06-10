import { styled } from '@/stitches.config';
import OpeaLogoSvg from '@/src/assets/opea-logo.svg';
import UserImageSvg from '@/src/assets/icon-user.svg';

export const Header = styled('header', {
  minHeight: '$headerDesktop',
  background: '$white',
  position: 'fixed',
  width: '100%',
  boxShadow: '$small',

  '@bp0': {
    minHeight: '$headerMobile'
  }
});
export const HeaderContainter = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 'inherit',

  '@bp0': {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem'
  }
});

export const OpeaLogo = styled(OpeaLogoSvg, {
  'path': {
    fill: '$wine'
  }
});

export const UserLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem'
});

export const UserName = styled('div', {
  fontSize: '14px',
  fontWeight: '500',
  color: '$secondary'
});
export const UserImage = styled(UserImageSvg, {
  'path': {
    fill: '$wine',
    opacity: '0.4'
  }
});
