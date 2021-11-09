import React from 'react';
import { Header } from 'common/components/templates/HomePageTemplate/components';
import { Container, Paper } from '@mui/material';

export const DashboardTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 12 }}>
        <Paper elevation={3}>{children}</Paper>
      </Container>
    </>
  );
};
