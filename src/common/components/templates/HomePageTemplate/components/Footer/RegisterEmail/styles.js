import { styled } from '@mui/material/styles';
import { InputBase, Typography } from '@mui/material';

export const RegisterEmailTitle = styled(Typography)({
  fontWeight: 'bold',
});

export const EmailInput = styled(InputBase)(({ error }) => {
  if (error)
    return {
      color: 'red',
    };

  return {};
});
