import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import { container, welcome, login } from './Login.module.scss';

export const LoginContainer = ({ children }) => {
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

      <div className={login}>{children}</div>
    </div>
  );
};
