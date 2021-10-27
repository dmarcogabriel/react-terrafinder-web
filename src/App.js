import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'fontsource-roboto';
import './styles/index.scss';
import { UserProvider } from 'contexts/User';
import PrivateRoute from 'common/components/PrivateRoute';
import { USER_KEY } from 'constants/userKey';
import { NotificationProvider } from 'contexts/Notification';
import Nofitication from 'common/components/Notification';
import { ThemeProvider } from 'contexts/Theme';
import Home from './app/Home';
import Login from './app/Login';
import Dashboard from './app/Dashboard';
import CreateProperty from './app/CreateProperty';

export default function App() {
  const storedUser = window.localStorage.getItem(USER_KEY);

  console.log('<App /> storedUser', storedUser);

  return (
    <ThemeProvider>
      <UserProvider storedUser={storedUser && JSON.parse(storedUser)}>
        <NotificationProvider>
          <Nofitication />

          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>

              <PrivateRoute path="/create/property">
                <CreateProperty />
              </PrivateRoute>

              <Redirect to="/home" />
            </Switch>
          </Router>
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
