import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/themes';

export const withTheme = (component) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export const renderWithTheme = (component) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
