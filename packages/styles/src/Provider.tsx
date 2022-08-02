import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { theme } from './Theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};
