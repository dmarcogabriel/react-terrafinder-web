import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './app/Home';
import 'fontsource-roboto';
import './styles/index.scss';
import ThemeProvider from './contexts/Styles';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </ThemeProvider>
  );
}
