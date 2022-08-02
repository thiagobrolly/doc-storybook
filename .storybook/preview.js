import { create } from '@storybook/theming';
import { GlobalStyles, ThemeProvider } from '@paylivre/styles';

const lightTheme = create({
  base: 'light',
  brandTitle: 'PAYLIVRE UI',
  backgrounds: {
    default: 'light',
  },
  brandUrl: 'https://www.paylivre.com/',
  brandImage: 'https://web.paylivre.com/static/media/logo-blue.c7100186.png',
});

const darkTheme = create({
  base: 'dark',
  brandTitle: 'PAYLIVRE UI',
  backgrounds: {
    default: 'dark',
  },
  brandUrl: 'https://www.paylivre.com/',
  brandImage: 'https://web.paylivre.com/static/media/logo-blue.c7100186.png',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: 'dark',
      },
      {
        name: 'paylivre',
        value: 'linear-gradient(90deg, rgba(33,90,255,1) 20%, rgba(0,151,255,1) 60%)',
      },
    ],
  },
  docs: {
    source: {
      language: 'jsx',
      type: 'auto',
      state: 'open',
    },
  },
  brandTitle: 'Paylivre Design System',
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
