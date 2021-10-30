import { styled } from '@mui/material/styles';

import { Box, Divider, Typography } from '@mui/material';

export const FooterBox = styled(Box)({
  padding: '2rem',
  backgroundColor: '#4b4b4b',
  color: '#eee',
});

export const FooterDivider = styled(Divider)({
  borderColor: '#ffcb08',
  opacity: 0.5,
});

export const FooterListTitle = styled(Typography)({
  fontWeight: 'bold',
});

export const FooterCopyWright = styled(Typography)({
  textAlign: 'center',
  margin: '1rem 0',
});
