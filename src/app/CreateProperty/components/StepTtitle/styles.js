import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TitleBase = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 'bold',
}));
