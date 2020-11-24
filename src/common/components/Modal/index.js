import React from 'react';
import classes from './Modal.module.scss';

export default function Modal({ show = false, children }) {
  return (
    show && (
      <div
        data-testid="modal"
        className={classes.modal}
        // todo: add a close on click on background
        // role="button"
        // tabIndex={0}
        // onKeyDown={() => onClose()}
        // onClick={() => onClose()}
      >
        <div className={classes.modalContent}>{children}</div>
      </div>
    )
  );
}
