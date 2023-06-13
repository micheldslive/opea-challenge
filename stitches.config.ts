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
      black: '#000000',
      wine: '#630A37',
      stroke: '#DDDDDD',
      primary: '#616161',
      secondary: '#969696',
      tertiary: '#b5b5b5',
      background: '#f7f7f7',
      cards: '#F5F5F5'
    },
    fonts: {
      body: 'Jost, sans-serif'
    },
    space: {
      paddingDesktop: '3.5rem',
      paddingMobile: '7rem',
      marginSearch: '4rem 0 0'
    },
    sizes: {
      headerDesktop: '3.5rem',
      headerMobile: '7rem'
    },
    transitions: {
      duration: '0.3s'
    },
    shadows: {
      small: '0 1px 2px 0 rgba(0,0,0,.05)',
      medium: '0 0px 4px 1px rgba(0,0,0,0.2)',
      large: '0 0px 8px 1px rgba(0,0,0,0.2)'
    },
    radii: {
      small: '5px',
      medium: '10px',
      large: '20px',
      company: '50px'
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
    }),
    button: (type: 'default' | 'wine') => {
      const isDefault = type === 'default';
      return {
        border: `2px solid ${isDefault ? '$stroke' : '$wine'}`,
        background: isDefault ? '$white' : '$wine',
        color: isDefault ? '$secondary' : '$white',
        borderRadius: '$small',
        transition: 'all $duration',
        'svg': {
          transition: 'all $duration'
        },
        '&:hover': {
          background: isDefault ? '$wine' : '$white',
          borderColor: '$wine',
          color: isDefault ? '$white' : '$wine',
          'svg': {
            fill: isDefault ? '$white' : '$wine'
          }
        }
      };
    },

    hover: (opacity: number) => ({
      transition: 'all $duration',
      '&:hover, &:focus': {
        opacity
      }
    })
  }
});

export const darkTheme = createTheme('dark', {
  colors: {
    white: '#222222',
    black: '#ffffff',
    wine: '#f59c9c',
    stroke: '#444444',
    primary: '#9e9e9e',
    secondary: '#696969',
    tertiary: '#4a4a4a',
    background: '#000000',
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
  section: {
    padding: '0 2rem',
    transition: 'all $duration',
    '@bp3': {
      padding: '0 1.25rem'
    }
  },
  a: {
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out'
  },
  'a:hover, a:focus': {
    opacity: '0.8'
  },
  button: {
    padding: '0',
    margin: '0',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  'input[type="text"]': {
    background: 'none',
    fontSize: '.875rem',
    color: '$primary'
  },
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap')"
  ]
});

globalStyles();
