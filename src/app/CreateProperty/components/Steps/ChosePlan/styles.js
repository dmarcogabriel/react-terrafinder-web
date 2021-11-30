import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const PlansBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const PlanPaper = styled(Paper)(({ theme, selected }) => ({
  cursor: 'pointer',
  backgroundColor: selected ? '#F5FFF1' : '#FFFCEC',
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
  // todo: add styles
}));
