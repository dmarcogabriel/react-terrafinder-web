import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';

import Landing from './Landing';
import SearchProperty from './SearchProperty';
import Property from './Property';
import About from './About';

export default function Home({ location }) {
  console.log('Location: ', location);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/home">
          <Landing />
        </Route>

        <Route path="/home/search-property">
          <SearchProperty />
        </Route>

        <Route path="/home/property">
          <Property />
        </Route>

        <Route path="/home/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}
