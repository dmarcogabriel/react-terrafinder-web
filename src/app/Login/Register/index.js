import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import api from 'services/api';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { TextInput } from 'common/components';
import { maskCpf, maskPhone } from 'utils/masks';
import { Box, Typography, Button } from '@mui/material';
import { LoginContainer, LoginH2, LoginSubtitle } from '../components';

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
      cpf: string()
        .min(14, 'Tamanho mínimo não satisfeito.')
        .required('Campo obrigatório!'),
      phone: string()
        .min(15, 'Tamanho mínimo não satisfeito')
        .required('Campo obrigatório!'),
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
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <LoginH2>Cadastre-se para criar seus anúncios</LoginH2>
        <LoginSubtitle>
          Já possui uma conta?{' '}
          <RouterLink to="/login">Faça o login aqui</RouterLink>
        </LoginSubtitle>
      </Box>
      <Box
        sx={{
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
          alignItems: 'flex-start',
          my: 2,
        }}
      >
        <TextInput
          dataTestId="firstNameInput"
          label="Primeiro nome"
          value={values.firstName}
          onChange={handleChange('firstName')}
          errorMessage={errors.firstName}
          containerSx={{ mb: { xs: 2, md: 0 } }}
        />

        <TextInput
          containerSx={{ mt: { xs: 2, md: 0 } }}
          dataTestId="lastNameInput"
          label="Sobrenome"
          value={values.lastName}
          onChange={handleChange('lastName')}
          errorMessage={errors.lastName}
        />
      </Box>
      <TextInput
        containerSx={{ my: 2 }}
        dataTestId="emailInput"
        label="E-mail"
        value={values.email}
        onChange={handleChange('email')}
        errorMessage={errors.email}
        inputProps={{ type: 'email' }}
        placeholder="exemplo@email.com.br"
      />
      <Box
        sx={{
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
          alignItems: 'flex-start',
          my: 2,
        }}
      >
        <TextInput
          dataTestId="phoneInput"
          label="Telefone para contato"
          value={values.phone}
          onChange={handleChange('phone')}
          errorMessage={errors.phone}
          placeholder="(14) 99999-8888"
          formatter={maskPhone}
          inputProps={{ maxLength: 15 }}
          containerSx={{ mb: { xs: 2, md: 0 } }}
        />

        <TextInput
          dataTestId="cpfInput"
          label="CPF"
          value={values.cpf}
          onChange={handleChange('cpf')}
          errorMessage={errors.cpf}
          placeholder="xxx.xxx.xxx-xx"
          formatter={maskCpf}
          inputProps={{ maxLength: 14 }}
          containerSx={{ mt: { xs: 2, md: 0 } }}
        />
      </Box>
      <TextInput
        dataTestId="passInput"
        label="Senha"
        value={values.password}
        errorMessage={errors.password}
        onChange={handleChange('password')}
        inputProps={{ type: 'password' }}
        containerSx={{ my: 2 }}
      />
      <Button
        data-testid="registerButton"
        onClick={handleSubmit}
        color="success"
        variant="contained"
        fullWidth
        sx={{ mt: 5, mb: 3 }}
      >
        Cadastrar
      </Button>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        Se cadastrando, você concorda com nossos{' '}
        <RouterLink to="/privacy-policy">
          Termos de uso e política de privacidade
        </RouterLink>
      </Typography>
    </LoginContainer>
  );
};
