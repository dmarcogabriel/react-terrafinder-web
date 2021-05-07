import React from 'react';
import _ from 'lodash';
import { ButtonBase } from './styles';

export const Button = ({
  children,
  onClick,
  dataTestId,
  modifiers = [],
  ...props
}) => (
  <ButtonBase
    modifiers={_.isEmpty(modifiers) ? ['default'] : modifiers}
    data-testid={dataTestId || 'button'}
    onClick={onClick}
    {...props}
  >
    {children}
  </ButtonBase>
);
