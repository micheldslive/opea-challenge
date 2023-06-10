import { styled } from '@/stitches.config';

export const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
  padding: '0.5em 1.5em'
});

export const InputLabel = styled('label', {
  color: '$wine'
});
export const Input = styled('input', {
  padding: '0.5rem',
  border: '2px solid $stroke'
});

export const InputErrors = styled('span', {
  color: '$wine',
  fontSize: '0.7rem'
});
