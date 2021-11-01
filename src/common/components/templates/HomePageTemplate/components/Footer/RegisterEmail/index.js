import React from 'react';
import { Paper, Button, Typography, Box } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { EmailInput, RegisterEmailTitle } from './styles';

export const RegisterEmail = () => {
  const { showNotification } = useNotification();
  const { handleChange, handleSubmit, values, errors, isValid } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: object().shape({
      email: string().email().required(),
    }),
    async onSubmit({ email }) {
      try {
        console.log('%c[Email]: ', 'color: cyan', email);
        // todo: send email to api
        showNotification(
          'E-mail enviado com sucesso!',
          NOTIFICATION_TYPES.SUCCESS
        );
      } catch (error) {
        showNotification(
          'Desculpe, um erro ocorreu, tente novamente mais tarde.',
          NOTIFICATION_TYPES.ERROR
        );
      }
    },
  });

  return (
    <Box sx={{ maxWidth: { md: '30%' } }}>
      <RegisterEmailTitle variant="h6">
        Fique por dentro das novidades!
      </RegisterEmailTitle>
      <Typography sx={{ my: 1 }}>
        Se inscreva em nossa newsletter para receber os anúncios com os melhores
        preços!
      </Typography>
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2,
          overflow: 'hidden',
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <EmailInput
          error={!!errors.email}
          value={values.email}
          fullWidth
          sx={{ ml: 1 }}
          inputProps={{ inputMode: 'email', 'data-testid': 'emailInput' }}
          onChange={({ target: { value } }) => handleChange('email')(value)}
          placeholder="Informe seu e-mail aqui"
        />
        <Button
          data-testid="registerEmail"
          disabled={!isValid}
          variant="contained"
          onClick={handleSubmit}
          color="success"
          sx={{ borderRadius: 0 }}
        >
          Cadastrar
        </Button>
      </Paper>
    </Box>
  );
};
