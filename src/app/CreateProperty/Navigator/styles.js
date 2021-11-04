import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const NavigationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
