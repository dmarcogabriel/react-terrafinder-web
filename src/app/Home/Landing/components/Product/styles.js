import { styled } from '@mui/material/styles';
import { Button, Box, Card as MuiCard } from '@mui/material';

export const ProductWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
}));

export const Card = styled(MuiCard)({
  display: 'flex',
  flexDirection: 'column',
  height: '305px',
});

export const MoreButton = styled(Button)({
  position: 'absolute',
  bottom: '-1.2rem',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
});
