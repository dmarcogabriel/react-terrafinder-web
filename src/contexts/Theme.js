import React, { useState } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { theme as defaultTheme } from 'styles/themes';

export const ThemeProvider = ({ children }) => {
  const [theme] = useState(defaultTheme);

  return (
    <StyledComponentsProvider theme={theme}>
      {children}
    </StyledComponentsProvider>
  );
};
