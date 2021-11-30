import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AvatarPreview = styled('img')({
  width: '100%',
  maxHeight: '150px',
});

export const ModalButtons = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FileInput = styled('input')({
  display: 'none',
});
