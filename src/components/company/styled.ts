import { styled } from '@/stitches.config';
import ClipboardIconSvg from '@/src/assets/icon-clipboard.svg';

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

  variants: {
    noBackground: {
      true: {
        background: 'transparent'
      }
    }
  }
});

export const CompanyIconContent = styled('div', {
  borderRadius: '50%',
  border: '2px solid $secondary',
  minWidth: '2.5rem',
  minHeight: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const CompanyIcon = styled(ClipboardIconSvg, {
  'path': {
    fill: '$primary'
  }
});

export const CompanyInfosContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingLeft: '1.5rem',
  color: '$black'
});

export const CompanyInfosContent = styled('span', {
  display: 'flex',

  '@bp3': {
    flexDirection: 'column'
  }
});

export const CompanyInfo = styled('span', {
  padding: '.1em 0',
  display: 'flex',
  textAlign: 'start',
  '@bp0': {
    fontSize: '.75rem'
  }
});

export const CompanyInfoSeparator = styled('span', {
  padding: '0 0.5em',
  '@bp3': {
    display: 'none'
  }
});
