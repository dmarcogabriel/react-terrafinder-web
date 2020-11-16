import React from 'react';
import { Button, Input } from 'common/components';
import { form, my2, actionButton } from '../Login.module.scss';

export default function ForgotPassword() {
  const handleEmail = (e) => {
    // todo: create email state
  };

  return (
    <div className={form}>
      <h2>Faça login para acessar seu painel</h2>

      <p>Insira seu e-mail abaixo para redefinir a senha</p>

      <div className={my2}>
        <Input label="E-mail" onChange={handleEmail} />

        <Button className={actionButton}>Redefinir Senha</Button>
      </div>
    </div>
  );
}
