import { styled } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'stretch',
  flexDirection: 'column-reverse',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const Children = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

export const Content = styled(Paper)({});

export const ProgressContainer = styled(Box)(({ theme }) => ({
  background: '#62AC4366',
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    width: '30%',
  },
}));

export const ProgressSteps = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  color: grey[50],
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80%',
  },
}));

export const StepBox = styled(Box)(({ theme, isActive }) => ({
  display: isActive ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const StepNumberBox = styled(Box)(({ isActive }) => ({
  position: 'relative',
  borderRadius: '100%',
  background: isActive ? '#62AC43A6' : '#eeeeee',
  border: isActive ? 'none' : '1px #4B4B4B solid',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StepNumber = styled(Typography)(({ isActive }) => ({
  position: 'absolute',
  color: isActive ? '#eeeeee' : '#4B4B4B',
}));

export const StepContent = styled(Paper)(({ isActive }) =>
  isActive
    ? {
        background: '#62AC43A6',
        color: '#eeeeee',
      }
    : {
        background: '#CDE5C2',
        color: '#4B4B4B',
      }
);
