import React from 'react';
import Button from 'common/components/atm/Button';
import Input from 'common/components/Input';
import { form, my2, actionButton } from '../components/Login.module.scss';
import { LoginContainer } from '../components';

export const ForgotPassword = () => {
  const handleEmail = () => {
    // todo: create email state
  };

  return (
    <LoginContainer>
      <div className={form}>
        <h2>Faça login para acessar seu painel</h2>

        <p>Insira seu e-mail abaixo para redefinir a senha</p>

        <div className={my2}>
          <Input label="E-mail" onChange={handleEmail} />

          <Button className={actionButton}>Redefinir Senha</Button>
        </div>
      </div>
    </LoginContainer>
  );
};
