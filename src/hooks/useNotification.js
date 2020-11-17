import { useContext } from 'react';
import { Context } from 'contexts/Notification';

export const useNotification = () => useContext(Context);

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARN: 'warning',
  ERROR: 'error',
};
