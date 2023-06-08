import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      wine: '#630A37',
      stroke: '#DDDDDD',
      primary: '#616161',
      secondary: '#969696',
      background: '#f7f7f7',
      cards: '#F5F5F5'
    },
    fonts: {
      body: 'Jost, sans-serif'
    },
    space: {
      headerDesktop: '3.5rem',
      headerMobile: '7rem'
    },
    transitions: {
      duration: '0.3s'
    }
  },
  media: {
    bp0: '(max-width: 425px)',
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 860px)',
    bp3: '(max-width: 860px)',
    bp4: '(max-width: 780px)',
    bp5: '(max-width: 1024px)',
    bp6: '(min-width: 1024px)'
  },
  utils: {
    size: (value: string) => ({
      width: value,
      height: value
    })
  }
});

export const darkTheme = createTheme('dark', {
  colors: {
    white: '#000000',
    wine: '#f59c9c',
    stroke: '#222222',
    primary: '#9e9e9e',
    secondary: '#696969',
    background: '#080808',
    cards: '#0a0a0a'
  }
});

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body'
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    border: 0
  },
  '::-webkit-scrollbar': {
    width: '0.375rem'
  },
  '::-webkit-scrollbar-track': {
    background: '$bgscroll'
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$primary',
    borderRadius: '10px',
    border: '10px solid $primary'
  },
  svg: {
    width: '2rem',
    height: '2rem'
  },
  figure: {
    margin: 0
  },
  h1: {
    fontFamily: '$heading',
    fontSize: '3rem',
    lineHeight: '3.125rem',
    margin: '0 0 0.1rem',
    color: '$primary'
  },
  h2: {
    color: '$primary',
    margin: '3.75rem 0 0',
    fontSize: '1.5rem'
  },
  'h3, h3 a': {
    color: '$primary',
    fontSize: '1.125rem',
    margin: '1.25rem 0 0'
  },
  ul: {
    margin: 0
  },
  img: {
    borderRadius: '0.5rem',
    minWidth: '100%',
    maxWidth: '100%'
  },
  p: {
    margin: '1.25rem 0',
    color: '$secondary'
  },
  strong: {
    color: '$primary',
    fontWeight: 500
  },
  a: {
    borderBottom: '1px solid $primary',
    color: '$primary',
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out'
  },
  'a:hover, a:focus': {
    opacity: '0.8'
  },
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap')"
  ]
});

globalStyles();