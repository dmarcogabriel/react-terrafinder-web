import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from 'common/components/PrivateRoute';
import {
  Landing,
  SearchProperty,
  Property,
  About,
  PrivacyPolicy,
  PlansPage,
} from './app/Home';
import { LoginForm, ForgotPassword, Register } from './app/Login';
import { Dashboard } from './app/Dashboard';
import { GeneralForm, DetailsForm, UploadPhotos } from './app/CreateProperty';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/search-property">
        <SearchProperty />
      </Route>
      <Route path="/property/:id">
        <Property />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="/plans">
        <PlansPage />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/create-property">
        <GeneralForm />
      </PrivateRoute>
      <PrivateRoute path="/create-property/details">
        <DetailsForm />
      </PrivateRoute>
      <PrivateRoute path="/create-property/upload-photos/:id">
        <UploadPhotos />
      </PrivateRoute>
      <Route path="**">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);
