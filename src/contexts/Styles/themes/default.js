const SIZES = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
};
export default {
  colors: {
    white: '#fff',
    black: '#0a1f07',
    orange: '#ed8936',
    primary: {
      dark: '#ffcb08',
      light: '#ffde00',
    },
    green: {
      dark: '#367c2b',
      default: '#62ac43',
      light: '#5ecc33',
    },
    blue: {
      light: '#01beff',
      dark: '#00314e',
    },
  },
  sizes(sizeNum) {
    return SIZES[sizeNum];
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  shadows: {
    base: '0px 7px 32px 2px rgba(0, 0, 0, 0.75)',
  },
};
