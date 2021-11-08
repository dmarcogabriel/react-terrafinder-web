import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

export const PlanHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '5rem',
});

export const PlanButton = styled((props) => (
  <Button sx={{ px: 5 }} {...props} />
))({
  backgroundColor: grey[50],
  borderRadius: '20px',
  boxShadow: `0 10px 20px 2px rgba(0, 0, 0, 0.8)`,
  '&:hover': {
    color: grey[50],
  },
});
