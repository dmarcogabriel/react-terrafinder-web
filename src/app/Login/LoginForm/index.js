import React from 'react';
import { Link } from 'react-router-dom';
import Input from 'common/Input';
import Button from 'common/Button';
import { container, registerButton, my, my2 } from '../Login.module.scss';

export default function LoginForm() {
  return (
    <div className={container}>
      <h2>Faça login para acessar seu painel</h2>

      <p>
        Não tem conta ainda?
        <Link to="/login/register"> Cadastre-se aqui</Link>
      </p>

      <div className={my2}>
        <Input label="E-mail" onChange={console.log} />

        <Input
          label="Senha"
          type="password"
          errorMessage="Mínimo 6 caracteres"
          onChange={console.log}
        />

        <p className={my}>
          Esqueceu sua senha?
          <Link to="/login/forgot-password">Clique aqui para redefinir</Link>
        </p>

        <Button className={registerButton}>Fazer Login</Button>
      </div>
    </div>
  );
}
