import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './app/Home';
import 'fontsource-roboto';
import './styles/index.scss';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}
