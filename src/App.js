import React from 'react';
import 'fontsource-roboto';
import './styles/index.scss';
import { UserProvider } from 'contexts/User';
import { NotificationProvider } from 'contexts/Notification';
import Nofitication from 'common/components/Notification';
import { OldThemeProvider } from 'contexts/OldTheme';
import { ThemeProvider } from 'contexts/Theme';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes } from './Routes';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <OldThemeProvider>
          <UserProvider>
            <NotificationProvider>
              <Nofitication />
              <Routes />
            </NotificationProvider>
          </UserProvider>
        </OldThemeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
