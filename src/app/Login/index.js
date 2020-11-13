import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import { container, welcome, login } from './Login.module.scss';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import Register from './Register';

export default function Login() {
  const { currentUser } = useUser();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.replace('/dashboard');
    }
  }, []);

  return (
    <div className={container}>
      <div className={welcome}>
        <h1>Bem vindo!</h1>
      </div>

      <div className={login}>
        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route path="/login/register">
            <Register />
          </Route>

          <Route path="/login/forgot-password">
            <ForgotPassword />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
