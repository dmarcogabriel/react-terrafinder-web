import React from 'react';
import { Box, Button } from '@mui/material';
import { TextInput } from 'common/components';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { string } from 'yup';
import api from 'services/api';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { LoginContainer, LoginH2, LoginSubtitle } from '../components';

export const ResetPassword = () => {
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const history = useHistory();
  const schema = string().min(6).required();
  const { showNotification } = useNotification();
  const { params } = useRouteMatch();

  const handleGoBack = () => history.goBack();

  const handleSubmit = async () => {
    try {
      const userId = Buffer.from(params.userId, 'base64').toString('binary');
      await api.post(`password/reset/${userId}`, { password });
      showNotification(
        'Senha atualizada com sucesso',
        NOTIFICATION_TYPES.SUCCESS
      );
      setTimeout(() => {
        history.push('/login');
      }, 500);
    } catch (error) {
      console.log(error);
      showNotification(
        'Ocorreu um erro ao atualizar sua senha.',
        NOTIFICATION_TYPES.ERROR
      );
    }
  };

  React.useEffect(() => {
    const validateEmail = async () => {
      const isValid = await schema.isValid(password);
      setPasswordError(isValid ? null : 'Campo obrigatório');
    };
    validateEmail();
  }, [password, schema]);

  return (
    <LoginContainer>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <LoginH2>Esqueceu sua senha?</LoginH2>
        <LoginSubtitle>
          Cadastre uma nova senha para sua conta abaixo:
        </LoginSubtitle>
      </Box>
      <TextInput
        inputProps={{ type: 'password' }}
        label="Senha"
        containerSx={{ my: 2 }}
        value={password}
        onChange={setPassword}
        errorMessage={passwordError}
        placeholder="Insira sua nova senha aqui..."
      />
      <Button
        fullWidth
        color="success"
        variant="contained"
        sx={{ mt: 5 }}
        onClick={handleSubmit}
      >
        Redefinir Senha
      </Button>
      <Button fullWidth sx={{ mt: 2 }} onClick={handleGoBack}>
        Voltar
      </Button>
    </LoginContainer>
  );
};
