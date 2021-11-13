import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AdvancedFiltersForms = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const InlineFilters = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
