import React from 'react';
import './styles.scss';

export default function Button({ className, children, onClick, ...props }) {
  return (
    <button className="button" type="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}
