import React from 'react';
import { HomePageTemplate } from 'common/components/templates/HomePageTemplate';
import { Box } from '@mui/material';
import { Plans } from '../components';

export const PlansPage = () => (
  <HomePageTemplate>
    <Box sx={{ mt: 12 }} />
    <Plans />
  </HomePageTemplate>
);
