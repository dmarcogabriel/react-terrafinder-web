import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const ContactUsContent = styled(Paper)({});

export const ContactUsFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));
