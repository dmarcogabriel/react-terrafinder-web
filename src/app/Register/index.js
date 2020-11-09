import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'common/Button';
import Input from 'common/Input';
import {
  container,
  welcome,
  register,
  registerButton,
  form,
  groupedInputs,
} from './Register.module.scss';

export default function Register() {
  return (
    <div className={container}>
      <div className={welcome}>
        <h1>Bem vindo!</h1>
      </div>

      <div className={register}>
        <div className={form}>
          <h2>Cadastre-se para cadastrar seu anúncio</h2>

          <p>
            Já tem uma conta?
            <Link to="/"> Faça o login aqui</Link>
          </p>

          <div className={groupedInputs}>
            <div className="input">
              <Input label="Primeiro nome" onChange={console.log} />
            </div>

            <div className="input">
              <Input label="Sobrenome" onChange={console.log} />
            </div>
          </div>

          <div className="input">
            <Input label="E-mail" onChange={console.log} />
          </div>

          <div className={groupedInputs}>
            <div className="input">
              <Input label="Telefone para contato" onChange={console.log} />
            </div>

            <div className="input">
              <Input label="CPF" onChange={console.log} />
            </div>
          </div>

          <div className="input">
            <Input
              label="Senha"
              type="password"
              errorMessage="Mínimo 6 caracteres"
              onChange={console.log}
            />
          </div>

          <Button className={registerButton}>Cadastrar</Button>

          <p>
            Se cadastrando, você concorda com nossos
            <Link to="/">Termos de Uso</Link>
            {' e '}
            <Link to="/">Política de privacidade</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
