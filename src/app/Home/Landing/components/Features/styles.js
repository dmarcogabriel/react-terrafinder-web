import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import backgroundImage from './featuresBackground.png';

export const FeaturesBackgroundImage = styled(Box)({
  position: 'absolute',
  height: '100%',
  width: '100%',
  opacity: 0.1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundImage: `url(${backgroundImage})`,
  zIndex: -1,
});

export const FeaturesTitle = styled((props) => (
  <Typography variant="h4" {...props} />
))({
  textAlign: 'center',
  fontWeight: 'bolder',
});

export const FeaturesSubtitle = styled((props) => (
  <Typography variant="h5" {...props} />
))({
  textAlign: 'center',
});

export const FeaturesBoxFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
