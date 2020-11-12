import React from 'react';
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';
import { Route, Switch } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import MyAds from './MyAds';

export default function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <Header />

      <Switch>
        <Route path="/">
          <MyAds />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
