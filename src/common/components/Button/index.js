import React from 'react';
import './styles.scss';
import cn from 'classnames';

export default function Button({ children, onClick, className, dataTestId }) {
  return (
    <button
      data-testid={dataTestId || 'button'}
      className={cn('button', className)}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
