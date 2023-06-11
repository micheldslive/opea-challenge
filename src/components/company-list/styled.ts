import { styled, keyframes } from '@/stitches.config';

export const CompanyListContent = styled('section', {});

const loader = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const CompanyListLoader = styled('div', {
  border: '.4em solid $wine',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  animation: `1s ${loader} linear infinite`,
  position: 'relative',
  display: 'inline-block',
  width: '2em',
  height: '2em',
  color: 'inherit',
  verticalAlign: 'middle'
});

export const CompanyListLoaderContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '3rem'
});
