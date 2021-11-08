import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const PlansTitle = styled((props) => (
  <Typography variant="h4" {...props} />
))({
  textAlign: 'center',
  fontWeight: 'bolder',
});

export const PlansSubtitle = styled((props) => (
  <Typography variant="h5" {...props} />
))({
  textAlign: 'center',
});

export const PlansContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const PlansDescriptionText = styled(Typography)({
  color: '#4b4b4b',
  lineHeight: '2rem',
});
