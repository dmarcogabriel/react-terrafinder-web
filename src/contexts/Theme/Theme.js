import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from './theme.obj';

export const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
