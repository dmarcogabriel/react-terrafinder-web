import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'fontsource-roboto';
import './styles/index.scss';

import Home from './app/Home';
import Login from './app/Login';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
}
