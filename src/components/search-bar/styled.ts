import { styled } from '@/stitches.config';
import SearchIconSvg from '@/src/assets/icon-search.svg';

export const SearchBarContainer = styled('div', {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'end'
});

export const SearchBarForm = styled('form', {
  padding: '.25rem 0',
  background: '$white',
  border: '2px solid $stroke',
  borderRadius: '5px',
  maxWidth: '330px',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
});

export const SearchBarInput = styled('input', {
  background: 'none',
  border: 'none',
  padding: '0.4rem 0 0.4rem .75rem',
  fontSize: '.875rem',
  color: '$primary',
  width: '100%'
});

export const SearchBarButton = styled('button', {
  padding: '0 .75rem',
  display: 'flex',
  height: '100%',
  alignItems: 'center'
});

export const SearchBarIcon = styled(SearchIconSvg, {
  'path': {
    fill: '$wine'
  }
});
