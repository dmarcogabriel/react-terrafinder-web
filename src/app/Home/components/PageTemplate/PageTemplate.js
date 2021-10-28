import React from 'react';
import Footer from 'common/components/Footer';
import Header from '../Header';

export const PageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
