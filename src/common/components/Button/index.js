import React from 'react';
import './styles.scss';
import cn from 'classnames';

export default function Button({ children, onClick, className }) {
  return (
    <button className={cn('button', className)} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
