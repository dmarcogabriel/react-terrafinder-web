import React from 'react';
import { Modal as MuiModal, Paper } from '@mui/material';

export const Modal = ({ show = false, children, onClose, ...props }) => (
  <MuiModal
    data-testid="modal"
    open={show}
    onClose={onClose && onClose}
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    {...props}
  >
    <Paper elevation={6} sx={{ p: 2 }}>
      {children}
    </Paper>
  </MuiModal>
);
