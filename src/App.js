import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'fontsource-roboto';
import './styles/index.scss';
import { UserProvider } from 'contexts/User';

import Home from './app/Home';
import Login from './app/Login';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}
