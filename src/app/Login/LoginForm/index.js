import React from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import api from 'services/api';
import { useUser } from 'hooks/useUser';
import { Box, Typography, Button } from '@mui/material';
import { TextInput } from 'common/components';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { LoginContainer, LoginH2, LoginSubtitle } from '../components';

export const LoginForm = () => {
  const { login } = useUser();
  const history = useHistory();
  const { showNotification } = useNotification();
  const { state } = useLocation();

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
      const to = (state && state.from) || '/dashboard';
      try {
        const { data: response } = await api.post('login', values);

        const headers = { 'x-access-token': response.data.token };

        const {
          data: userData,
        } = await api.get(`users/${response.data.userId}`, { headers });
        login({ ...userData.data.user, token: response.data.token });
        showNotification('Logado com sucesso!', NOTIFICATION_TYPES.SUCCESS);
        history.replace(to);
      } catch (error) {
        showNotification(
          'E-mail ou senha incorretos.',
          NOTIFICATION_TYPES.ERROR
        );
      }
    },
  });

  const handleGoBack = () => history.goBack();

  return (
    <LoginContainer>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <LoginH2>Faça login para acessar seu painel</LoginH2>
        <LoginSubtitle>
          Não tem conta ainda?{' '}
          <RouterLink to="/register">Cadastre-se aqui</RouterLink>
        </LoginSubtitle>
      </Box>
      <Box
        sx={{
          px: { xs: 0, md: 15 },
        }}
      >
        <TextInput
          label="E-mail"
          value={values.email}
          onChange={handleChange('email')}
          errorMessage={errors.email}
          containerSx={{ my: 2 }}
        />
        <TextInput
          label="Senha"
          value={values.password}
          onChange={handleChange('password')}
          errorMessage={errors.password}
          inputProps={{ type: 'password' }}
          containerSx={{ my: 2 }}
        />

        <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, my: 3 }}>
          Esqueceu sua senha?{' '}
          <RouterLink to="/forgot-password">
            Clique aqui para redefinir
          </RouterLink>
        </Typography>

        <Button
          fullWidth
          color="success"
          variant="contained"
          onClick={handleSubmit}
        >
          Fazer Login
        </Button>
        <Button sx={{ mt: 2 }} fullWidth onClick={handleGoBack}>
          Voltar
        </Button>
      </Box>
    </LoginContainer>
  );
};
