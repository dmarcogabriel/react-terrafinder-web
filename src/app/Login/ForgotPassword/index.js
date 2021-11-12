import React from 'react';
import { Box, Button } from '@mui/material';
import { TextInput } from 'common/components';
import { useHistory } from 'react-router-dom';
import { string } from 'yup';
import api from 'services/api';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { LoginContainer, LoginH2, LoginSubtitle } from '../components';

export const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const history = useHistory();
  const schema = string().email().required();
  const { showNotification } = useNotification();

  const handleGoBack = () => history.goBack();

  const handleSubmit = async () => {
    try {
      await api.post('password/forgot', { email });
      showNotification(
        'Um e-mail foi enviado para sua caixa de entrada',
        NOTIFICATION_TYPES.SUCCESS
      );
    } catch (error) {
      showNotification(
        'Ocorreu um erro ao enviar e-mail, por favor tente novamente mais tarde',
        NOTIFICATION_TYPES.ERROR
      );
    }
  };

  React.useEffect(() => {
    const validateEmail = async () => {
      const isValid = await schema.isValid(email);
      setEmailError(isValid ? null : 'Campo obrigatório');
    };
    validateEmail();
  }, [email, schema]);

  return (
    <LoginContainer>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <LoginH2>Esqueceu sua senha?</LoginH2>
        <LoginSubtitle>
          Insira seu e-mail abaixo para redefinir a senha
        </LoginSubtitle>
      </Box>
      <TextInput
        label="E-mail"
        containerSx={{ my: 2 }}
        value={email}
        onChange={setEmail}
        errorMessage={emailError}
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
