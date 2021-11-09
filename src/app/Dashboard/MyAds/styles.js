import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

export const MyAdsHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const CreateAdButton = styled(Button)({
  margin: '1rem 0',
});

// export const CreateAdButton = styled(Button).attrs({ modifiers: 'success' })`
//   display: flex;
//   margin: 1rem 0;

//   ${({ theme: { breakpoint } }) => css`
//     @media (${breakpoint.desktop}) {
//       position: absolute;
//       right: 2rem;
//       top: 9rem;
//     }
//   `}

//   > p {
//     margin-left: 1rem;
//   }
// `;
