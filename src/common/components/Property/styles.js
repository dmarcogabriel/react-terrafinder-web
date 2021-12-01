import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, Button, ButtonBase } from '@mui/material';

export const ClickableArea = styled(ButtonBase)({
  // styles here...
});

export const PropertyPremiumLabel = styled(Typography)({
  backgroundColor: '#ffcb08',
  borderBottomLeftRadius: '0.2rem',
  borderBottomRightRadius: '0.2rem',
  position: 'absolute',
  left: '1.5rem',
  display: 'flex',
  alignItems: 'center',
});

export const PropertyAmount = styled(({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
))(({ theme }) => ({
  backgroundColor: '#ffcb08',
  borderTopLeftRadius: '0.2rem',
  borderBottomLeftRadius: '0.2rem',

  [theme.breakpoints.up('md')]: {
    // position: absolute;
    // top: 1rem;
    // right: 0;
    // border-bottom-right-radius: 0;
    // border-top-right-radius: 0;
  },
}));

export const PropertyAtributesBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const PropertyAttribute = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});
