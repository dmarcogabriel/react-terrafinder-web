import React from 'react';
import { useNotification } from 'hooks/useNotification';
import { Alert, Snackbar } from '@mui/material';

export default function Notification() {
  const { notification, show } = useNotification();

  return (
    <Snackbar open={show} autoHideDuration={5000} data-testid="notification">
      <Alert
        variant="filled"
        elevation={6}
        severity={notification.type}
        sx={{ width: '100%' }}
        data-testid="notificationMessage"
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
}
