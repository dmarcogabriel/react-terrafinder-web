import React from 'react';
import { isString } from 'lodash';
import { TitleBase } from './styles';

export const StepTitle = ({ children }) => {
  if (!isString(children)) {
    throw new Error('Children must be a string');
  }

  return (
    <TitleBase sx={{ my: 3 }} variant="h6" component="h1">
      {children}
    </TitleBase>
  );
};
