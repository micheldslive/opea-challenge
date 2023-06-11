import { styled } from '@/stitches.config';

export const CompanyContent = styled('button', {
  margin: '1rem 0',
  padding: '1.2rem 1rem',
  background: '$white',
  boxShadow: '$small',
  borderRadius: '$company  0  0 $company',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  fontSize: 'initial',
  transition: 'all $duration',

  '&:hover': {
    opacity: '0.8',
    transform: 'translateY(-5px)',
    scale: '1.01'
  },

  variants: {
    transparent: {
      true: {
        background: 'transparent',
        border: '2px solid $stroke'
      }
    }
  }
});
