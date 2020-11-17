import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const NotificationProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({
    message: '',
    type: 'info',
  });

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setShow(true);
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);

  return (
    <Context.Provider
      value={{
        show,
        notification,
        showNotification,
      }}
    >
      {children}
    </Context.Provider>
  );
};
