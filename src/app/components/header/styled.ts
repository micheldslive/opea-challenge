import { styled } from '@/stitches.config';
import OpeaLogoSvg from '@/src/app/assets/opea-logo.svg';
import UserImageSvg from '@/src/app/assets/icon-user.svg';

export const Header = styled('header', {
  minHeight: '$headerDesktop',
  background: '$white',
  position: 'fixed',
  width: '100%',
  boxShadow: '$small'
});
export const HeaderContainter = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 'inherit'
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
