import React from 'react';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';
import { HomePageTemplate, TextInput } from 'common/components';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { maskPhone } from 'utils/masks';
import api from 'services/api';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import contactUsImg from './contact-us.png';
import { ContactUsContent, ContactUsFlex } from './styles';

export const ContactUsPage = () => {
  const { showNotification } = useNotification();

  const { values, isValid, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: object().shape({
      name: string().required(),
      email: string().email().required(),
      phone: string().min(15).required(),
      message: string().min(6).required(),
    }),
    async onSubmit(formData) {
      try {
        await api.post('/support', formData);
        resetForm();
        showNotification(
          'Mensagem enviada com sucesso!',
          NOTIFICATION_TYPES.SUCCESS
        );
      } catch (error) {
        showNotification(
          'Ops, algo deu errado, tente novamente mais tarde.',
          NOTIFICATION_TYPES.ERROR
        );
      }
    },
  });
  return (
    <HomePageTemplate>
      <Box sx={{ mt: 12, px: 1, pb: 2 }}>
        <Typography component="h1" variant="h2">
          Fale Conosco
        </Typography>
        <ContactUsContent sx={{ p: 1 }}>
          <Typography variant="h5" sx={{ pb: 3, textAlign: 'center' }}>
            Entre em contato conosco! Seja para tirar uma dúvida sobre a
            plataforma ou contratar o plano profissional.
          </Typography>
          <ContactUsFlex>
            <Card
              sx={{
                height: { xs: 150, md: 300 },
                width: { xs: '100%', md: '35%' },
              }}
            >
              <CardMedia
                image={contactUsImg}
                sx={{ height: '100%', width: '100%' }}
              />
            </Card>

            <Box
              component="form"
              sx={{
                p: 1,
                width: { xs: 'inherit', md: '25%' },
                mt: { xs: 2, md: 0 },
              }}
            >
              <TextInput
                noValidation
                label="Nome"
                sx={{ py: 1 }}
                placeholder="Digite seu nome"
                value={values.name}
                onChange={handleChange('name')}
              />
              <TextInput
                noValidation
                label="E-mail"
                sx={{ py: 1 }}
                placeholder="Digite seu e-mail"
                value={values.email}
                onChange={handleChange('email')}
              />
              <TextInput
                noValidation
                label="Telefone"
                sx={{ py: 1 }}
                placeholder="Digite seu telefone com DDD"
                value={values.phone}
                onChange={handleChange('phone')}
                formatter={maskPhone}
                inputProps={{ maxLength: 15 }}
              />
              <TextInput
                noValidation
                label="Mensagem"
                sx={{ py: 1 }}
                multiline
                rows={5}
                placeholder="Digite aqui sua mensagem! Pode ser uma dúvida, crítica, sugestão, o que quiser!"
                value={values.message}
                onChange={handleChange('message')}
              />
              <Button
                disabled={!isValid}
                fullWidth
                variant="contained"
                sx={{ my: 2 }}
                onClick={handleSubmit}
              >
                Enviar Mensagem
              </Button>
            </Box>
          </ContactUsFlex>
        </ContactUsContent>
      </Box>
    </HomePageTemplate>
  );
};
