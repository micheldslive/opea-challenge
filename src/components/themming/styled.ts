import { styled } from '@/stitches.config';
import MoonIconSvg from '@/src/assets/icon-moon.svg';
import SunIconSvg from '@/src/assets/icon-sun.svg';

const SVGstyles = {
  fill: '$primary',
  width: '1.5rem',
  height: '1.5rem'
};

export const ThemeButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  cursor: 'pointer',
  padding: '0.35rem',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' }
});

export const Moon = styled(MoonIconSvg, {
  ...SVGstyles
});
export const Sun = styled(SunIconSvg, {
  ...SVGstyles
});
