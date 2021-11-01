import React from 'react';
import { Box, Button } from '@mui/material';
import { TextInput } from 'common/components';
import { LoginContainer, LoginH2, LoginSubtitle } from '../components';

export const ForgotPassword = () => {
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
        // value={values.email}
        // onChange={handleChange('email')}
        // errorMessage={errors.email}
      />
      <Button fullWidth color="success" variant="contained" sx={{ mt: 5 }}>
        Redefinir Senha
      </Button>
    </LoginContainer>
  );
};
