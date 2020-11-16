import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';
import Landing from './Landing';
import SearchProperty from './SearchProperty';
import Property from './Property';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';

export default function Home() {
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

        <Route path="/home/property/:id">
          <Property />
        </Route>

        <Route path="/home/about">
          <About />
        </Route>

        <Route path="/home/privacy-policy">
          <PrivacyPolicy />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}
