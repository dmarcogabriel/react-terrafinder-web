import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';

import Landing from './Landing';
import SearchProperty from './SearchProperty';
import Property from './Property';

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
      </Switch>

      <Footer />
    </>
  );
}
