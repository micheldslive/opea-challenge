import { styled } from '@/stitches.config';
import CloseIconSvg from '@/src/assets/icon-close.svg';

export const ModalContent = styled('div', {
  opacity: 0,
  pointerEvents: 'none',
  visibility: 'hidden',
  transition: 'all $duration',

  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
        visibility: 'visible'
      }
    }
  }
});

export const ModalContainer = styled('div', {
  position: 'fixed',
  bottom: '0',
  right: '0',
  backdropFilter: 'blur(4px)',
  display: 'flex',
  width: '100vw',
  height: '100vh',
  zIndex: '9'
});

export const ModalForm = styled('form', {
  position: 'fixed',
  background: '$white',
  borderRadius: '$small',
  display: 'flex',
  gap: '1em',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '300px',
  height: 'fit-content',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '10',
  boxShadow: '$medium',

  '@bp0': {
    width: '90%'
  }
});

export const ModalFormContent = styled('div', {});

export const ModalHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.6rem 1rem',
  borderBottom: '2px solid $stroke'
});
export const ModalHeaderTitle = styled('span', {
  fontSize: '1rem',
  fontWeight: '400',
  color: '$tertiary'
});

export const ModalHeaderCloseButton = styled('button', {
  display: 'flex'
});
export const ModalHeaderCloseIcon = styled(CloseIconSvg, {
  fill: '$black',
  fillOpacity: '0.1'
});
