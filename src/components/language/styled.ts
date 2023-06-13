import { styled } from '@/stitches.config';
import GlobalIconSvg from '@/src/assets/icon-global.svg';
import Link from 'next/link';

export const CustomLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.1rem'
});

export const CustomText = styled('span', {
  color: '$primary',
  display: 'flex',
  lineHeight: '1rem'
});

export const CustomGlobalImage = styled(GlobalIconSvg, {
  display: 'flex',
  width: '23px',
  height: '23px',
  fill: '$primary'
});
