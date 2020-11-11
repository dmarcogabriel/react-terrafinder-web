import React from 'react';
import { Link } from 'react-router-dom';
import Input from 'common/Input';
import Button from 'common/Button';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import api from 'services/api';
import { useUser } from 'hooks/useUser';
import { form, actionButton, my, my2 } from '../Login.module.scss';

export default function LoginForm() {
  const { login } = useUser();

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: object().shape({
      email: string().email('Deve ser e-mail').required('Campo obrigatório'),
      password: string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Campo Obrigatório'),
    }),
    async onSubmit() {
      const response = await api.post('login', values);

      const userData = await api.get(`users/${response.data.userId}`, {
        headers: {
          'x-access-token': response.data.token,
        },
      });

      login({ ...userData.data.user, token: response.data.token });
    },
  });

  return (
    <div className={form}>
      <h2>Faça login para acessar seu painel</h2>

      <p>
        Não tem conta ainda?
        <Link to="/login/register"> Cadastre-se aqui</Link>
      </p>

      <div className={my2}>
        <Input
          label="E-mail"
          value={values.email}
          onChange={handleChange('email')}
          errorMessage={errors.email}
        />

        <Input
          label="Senha"
          type="password"
          value={values.password}
          onChange={handleChange('password')}
          errorMessage={errors.password}
        />

        <p className={my}>
          Esqueceu sua senha?
          <Link to="/login/forgot-password">Clique aqui para redefinir</Link>
        </p>

        <Button className={actionButton} onClick={handleSubmit}>
          Fazer Login
        </Button>
      </div>
    </div>
  );
}
