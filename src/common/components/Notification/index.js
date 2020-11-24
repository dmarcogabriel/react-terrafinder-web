import React from 'react';
import { useNotification } from 'hooks/useNotification';
import './styles.scss';
import cn from 'classnames';

export default function Notification() {
  const { notification, show } = useNotification();

  const style = {
    opacity: show ? 0.8 : 0,
    zIndex: show ? -50 : 5000,
  };

  return (
    <div
      data-testid="notification"
      className={cn('Notification__container', notification.type)}
      style={style}
    >
      <p data-testid="notificationMessage">{notification.message}</p>
    </div>
  );
}
