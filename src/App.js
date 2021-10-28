import React from 'react';
import 'fontsource-roboto';
import './styles/index.scss';
import { UserProvider } from 'contexts/User';
import { USER_KEY } from 'constants/userKey';
import { NotificationProvider } from 'contexts/Notification';
import Nofitication from 'common/components/Notification';
import { ThemeProvider } from 'contexts/Theme';
import { Routes } from './Routes';

export default function App() {
  const storedUser = window.localStorage.getItem(USER_KEY);

  return (
    <ThemeProvider>
      <UserProvider storedUser={storedUser && JSON.parse(storedUser)}>
        <NotificationProvider>
          <Nofitication />
          <Routes />
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
