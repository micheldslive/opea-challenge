import { styled } from '@/stitches.config';
import InputMask from 'react-input-mask';

export const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5em 1.5em'
});

export const InputLabel = styled('label', {
  color: '$wine'
});

export const Input = styled('input', {
  padding: '0.5rem',
  border: '2px solid $stroke'
});

export const InputMasked = styled(InputMask, {
  padding: '0.5rem',
  border: '2px solid $stroke'
});

export const InputErrors = styled('span', {
  color: '$wine',
  fontSize: '0.7rem'
});
