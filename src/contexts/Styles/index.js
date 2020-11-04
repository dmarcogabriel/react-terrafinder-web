import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './themes/default';

export default function ThemeProvider({ children }) {
  return <Provider theme={defaultTheme}>{children}</Provider>;
}
