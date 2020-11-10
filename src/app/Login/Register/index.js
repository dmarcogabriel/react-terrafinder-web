import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'common/Button';
import Input from 'common/Input';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { form, groupedInputs, actionButton } from '../Login.module.scss';

export default function Register() {
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
    onSubmit() {
      console.log(values);
    },
  });
  return (
    <div className={form}>
      <h2>Cadastre-se para cadastrar seu anúncio</h2>

      <p>
        Já tem uma conta?
        <Link to="/login"> Faça o login aqui</Link>
      </p>

      <div className={groupedInputs}>
        <Input
          label="Primeiro nome"
          value={values.firstName}
          onChange={handleChange('firstName')}
          errorMessage={errors.firstName}
        />

        <Input
          label="Sobrenome"
          value={values.lastName}
          onChange={handleChange('lastName')}
          errorMessage={errors.lastName}
        />
      </div>

      <Input
        label="E-mail"
        type="email"
        value={values.email}
        onChange={handleChange('email')}
        errorMessage={errors.email}
      />

      <div className={groupedInputs}>
        <Input
          label="Telefone para contato"
          value={values.phone}
          onChange={handleChange('phone')}
          errorMessage={errors.phone}
        />

        <Input
          label="CPF"
          value={values.cpf}
          onChange={handleChange('cpf')}
          errorMessage={errors.cpf}
        />
      </div>

      <Input
        label="Senha"
        type="password"
        value={values.password}
        errorMessage={errors.password}
        onChange={handleChange('password')}
      />

      <Button className={actionButton} onClick={handleSubmit}>
        Cadastrar
      </Button>

      <p>
        Se cadastrando, você concorda com nossos
        <Link to="/">Termos de Uso</Link>
        {' e '}
        <Link to="/">Política de privacidade</Link>
      </p>
    </div>
  );
}
