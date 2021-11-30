import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const white = grey[50];

export default createTheme({
  palette: {
    primary: {
      main: '#ffcb08',
    },
    success: {
      main: '#5ecc33',
      contrastText: white,
    },
    info: {
      main: '#2575FC',
      contrastText: white,
    },
    grey: {
      main: '#EAEAEA',
      contrastText: '#909090',
    },
  },
});
// export default {
//   color: {
//     primary: {
//       df: '#ffcb08',
//       lt: '#ffde00',
//     },
//     white: {
//       df: '#fff',
//     },
//     black: {
//       df: '#333',
//     },
//     gray: {
//       df: '#aaa',
//       lt: '#eee',
//       dk: '#4b4b4b',
//     },
//     orange: {
//       df: '#ed8936',
//     },
//     green: {
//       df: '#62ac43',
//       lt: '#5ecc33',
//       dk: '#367c2b',
//     },
//     limegreen: {
//       df: '#81e49b',
//     },
//     blue: {
//       df: '#16a5df',
//       lt: '#01beff',
//       dk: '#00314e',
//     },
//     pink: {
//       df: '#f37c8e',
//     },
//     red: {
//       df: '#f06e5a',
//       dk: '#a40e4c',
//     },
//   },
//   fontFamily: {
//     roboto: 'Roboto',
//   },
//   fontSize: {
//     md: '1rem',
//   },
//   size: {
//     sm: '0.75rem',
//     lg: '1.25rem',
//     full: '100%',
//     borderRadius: '0.25rem',
//   },
//   shadow: '0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.7)',
//   breakpoint: {
//     desktop: 'min-width: 768px',
//   },
// };
