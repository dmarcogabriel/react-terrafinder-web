import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EditPropertyPageActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

export const Image = styled('img')({
  height: 200,
  width: '100%',
});
