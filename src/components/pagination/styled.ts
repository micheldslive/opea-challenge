import { styled } from '@/stitches.config';

const paginationStyle = {
  width: '2rem',
  height: '2rem',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  border: '2px solid $stroke'
};

export const PaginationContent = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

export const PaginationButton = styled('button', {
  ...paginationStyle
});
export const PaginationPage = styled('div', {
  ...paginationStyle,
  borderLeft: 'none',
  borderRight: 'none'
});
