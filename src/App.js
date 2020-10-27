import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import 'fontsource-roboto';
import './styles/global.scss';
import './tailwind.output.css';

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
  </Router>
);

export default App;
