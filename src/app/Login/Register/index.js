import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'common/components/atm/Button';
import Input from 'common/components/Input';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import api from 'services/api';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import {
  form,
  groupedInputs,
  actionButton,
} from '../components/Login.module.scss';
import { LoginContainer } from '../components';

export const Register = () => {
  const history = useHistory();
  const { showNotification } = useNotification();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      cpf: '',
      phone: '',
      password: '',
    },
    validationSchema: object().shape({
      firstName: string().required('Campo obrigatório!'),
      lastName: string().required('Campo obrigatório!'),
      email: string().email().required('Campo obrigatório!'),
      cpf: string().required('Campo obrigatório!'),
      phone: string().required('Campo obrigatório!'),
      password: string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Campo obrigatório!'),
    }),
    async onSubmit() {
      try {
        await api.post('users', { ...values });

        showNotification(
          'Cadastro efetuado com sucesso',
          NOTIFICATION_TYPES.SUCCESS
        );
        history.push('/login');
      } catch (error) {
        showNotification('Erro ao efetuar cadastro', NOTIFICATION_TYPES.ERROR);
      }
    },
  });

  return (
    <LoginContainer>
      <div className={form}>
        <h2>Cadastre-se para cadastrar seu anúncio</h2>

        <p>
          Já tem uma conta?
          <Link to="/login"> Faça o login aqui</Link>
        </p>

        <div className={groupedInputs}>
          <Input
            dataTestId="firstNameInput"
            label="Primeiro nome"
            value={values.firstName}
            onChange={handleChange('firstName')}
            errorMessage={errors.firstName}
          />

          <Input
            dataTestId="lastNameInput"
            label="Sobrenome"
            value={values.lastName}
            onChange={handleChange('lastName')}
            errorMessage={errors.lastName}
          />
        </div>

        <Input
          dataTestId="emailInput"
          label="E-mail"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          errorMessage={errors.email}
        />

        <div className={groupedInputs}>
          <Input
            dataTestId="phoneInput"
            label="Telefone para contato"
            value={values.phone}
            onChange={handleChange('phone')}
            errorMessage={errors.phone}
          />

          <Input
            dataTestId="cpfInput"
            label="CPF"
            value={values.cpf}
            onChange={handleChange('cpf')}
            errorMessage={errors.cpf}
          />
        </div>

        <Input
          dataTestId="passInput"
          label="Senha"
          type="password"
          value={values.password}
          errorMessage={errors.password}
          onChange={handleChange('password')}
        />

        <Button
          dataTestId="registerButton"
          className={actionButton}
          onClick={handleSubmit}
        >
          Cadastrar
        </Button>

        <p>
          Se cadastrando, você concorda com nossos
          <Link to="/">Termos de Uso</Link>
          {' e '}
          <Link to="/">Política de privacidade</Link>
        </p>
      </div>
    </LoginContainer>
  );
};
