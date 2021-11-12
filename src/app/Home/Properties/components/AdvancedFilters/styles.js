import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AdvancedFiltersForms = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
