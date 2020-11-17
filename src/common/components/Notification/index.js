import React from 'react';
import { useNotification } from 'hooks/useNotification';
import './styles.scss';
import cn from 'classnames';

export default function Notification() {
  const { notification, show } = useNotification();

  return (
    show && (
      <div className={cn('Notification__container', notification.type)}>
        <p>{notification.message}</p>
      </div>
    )
  );
}
