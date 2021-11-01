import React from 'react';
import { Typography } from '@mui/material';

export const LoginH2 = ({ children }) => (
  <Typography variant="h4" component="h2" sx={{ color: '#ffcb08' }}>
    {children}
  </Typography>
);

export const LoginSubtitle = ({ children }) => (
  <Typography sx={{ mt: 2, mb: 3 }}>{children}</Typography>
);
