import { styled } from '@/stitches.config';

export const HomeLayout = styled('main', {
  paddingTop: '$paddingDesktop',

  '@bp0': {
    paddingTop: '$paddingMobile'
  }
});
