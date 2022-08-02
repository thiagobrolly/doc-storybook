export const theme = {
  color: {
    // Color Scheme
    primary: '#215aff',
    primary_variant: '#1781ff',
    secondary: '#0f194b',
    secondary_variant: '#1e2642',
    error: '#fe5454',
    success: '#48c88f',
    background: '#f0eff4',
    title: '#707070',

    // Primary
    primary_050: '#b7c9ff',
    primary_100: '#88a6ff',
    primary_200: '#5e85fb',
    primary_300: '#4775fe',
    primary_400: '#4775fe',
    primary_500: '#215aff', // primary
    primary_600: '#134fff',
    primary_700: '#032dff',
    primary_800: '#0e1fff',
    primary_900: '#0b03ff',

    // Secondary
    secondary_050: '#3f4970',
    secondary_100: '#283257',
    secondary_200: '#1e2642', // secondary_variant
    secondary_300: '#121b3a',
    secondary_400: '#0f194b', // secondary
    secondary_500: '#090033',
    secondary_600: '#080129',
    secondary_700: '#060020',
    secondary_800: '#040016',
    secondary_900: '#02000c',

    // Neutral
    white: '#ffffff',
    gray_default: '#a8a8a8',
    gray_500: '#ecedef',
    gray_600: '#dfe1e4',
    gray_700: '#d3d6da',
    gray_800: '#b1b8be',
    gray_900: '#929aa3',
    black_500: '#747c87',
    black_600: '#565e6d',
    black_700: '#374050',
    black_800: '#152235',
    black_900: '#051225',
    black: '#000000',
  },

  font: {
    family: {
      primary: "'Open Sans', sans-serif",
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    },
    size: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.4rem',
      big: '4.8rem',
      xbig: '6.0rem',
      huge: '9.6rem',
    },
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },

  breakpoints: {
    xmodile: '320px',
    modile: '480px',
    tablet: '768px',
    desktop: '1170px',
    hd: '1440px',
  },

  layers: {
    hide: -1,
    auto: 'auto',
    base: 1,
    dropdown: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwayOnTop: 50,
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },

  border: {
    radius: {
      xsmall: '0.2rem',
      small: '0.5rem',
      medium: '0.8rem',
      large: '2rem',
      circle: '50%',
    },
  },

  shadow: {
    base: '0 2px 10px 0 rgba(0, 41, 77, 0.1)',
    xs: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
    sm: '0 2px 20px 0 rgba(0, 0, 0, 0.2)',
    md: '0px 10px 15px 0px rgba(0, 0, 0, 0.25)',
    lg: '0px 20px 40px 10px rgba(0, 0, 0, 0.50)',
  },

  opacity: {
    zero: '0',
    high: '0.25',
    medium: '0.5',
    low: '0.75',
    normal: '1',
  },
} as const;
