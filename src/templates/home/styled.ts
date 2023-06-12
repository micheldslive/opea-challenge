import { styled } from '@/stitches.config';

export const HomeLayout = styled('main', {
  paddingTop: '$paddingDesktop',

  '@bp0': {
    paddingTop: '$paddingMobile'
  }
});

export const HomeContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '$marginSearch',
  gap: '1rem',

  '@bp0': {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export const HomerContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});
