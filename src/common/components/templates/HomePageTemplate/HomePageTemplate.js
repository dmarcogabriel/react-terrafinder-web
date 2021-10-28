import React from 'react';
import { Header, Footer } from './components';

export const HomePageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
