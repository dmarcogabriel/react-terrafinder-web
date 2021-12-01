import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from 'common/components/PrivateRoute';
import {
  Landing,
  Properties,
  Property,
  About,
  PrivacyPolicy,
  PlansPage,
  ContactUsPage,
} from './app/Home';
import {
  LoginForm,
  ForgotPassword,
  Register,
  ResetPasswordPage,
} from './app/Login';
import { Dashboard, EditPropertyPage } from './app/Dashboard';
import { CreateProperty } from './app/CreateProperty';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/search-property">
        <Properties />
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
      <Route path="/reset-password/:userId">
        <ResetPasswordPage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/contact-us">
        <ContactUsPage />
      </Route>
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/edit-property/:id">
        <EditPropertyPage />
      </PrivateRoute>
      <PrivateRoute exact path="/create-property">
        <CreateProperty />
      </PrivateRoute>
      <Route path="**">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);
