import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';
import { purple, green } from '@mui/material/colors';

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
  backgroundColor: selected ? green[100] : purple[50],
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
  // todo: add styles
}));
