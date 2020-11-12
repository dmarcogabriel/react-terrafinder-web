import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'fontsource-roboto';
import './styles/index.scss';
import { UserProvider } from 'contexts/User';
import PrivateRoute from 'common/components/PrivateRoute';

import Home from './app/Home';
import Login from './app/Login';
import Dashboard from './app/Dashboard';

export default function App() {
  const token = window.localStorage.getItem('@app:token');

  return (
    <UserProvider token={token}>
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
        </Switch>
      </Router>
    </UserProvider>
  );
}
