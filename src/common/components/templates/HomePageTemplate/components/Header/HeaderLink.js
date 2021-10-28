import React from 'react';
import { Link } from '@mui/material';

export const HeaderLink = ({ link, ...props }) => {
  return <Link sx={{ color: '#333' }} {...props} />;
};
