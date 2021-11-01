import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Typography } from '@mui/material';

export const Root = styled(Container)({
  display: 'flex',
});

export const WelcomeBox = styled(Box)({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

export const GreetingText = styled(Typography)({
  color: '#eee',
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
});

export const ContentBox = styled(({ children, ...props }) => (
  <Paper elevation={2} {...props}>
    {children}
  </Paper>
))(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));
