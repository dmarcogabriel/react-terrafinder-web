import React, { useState } from 'react';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import { Announcement as AdIcon } from '@mui/icons-material';
import api from 'services/api';
import Property from 'common/components/Property';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { useFormik } from 'formik';
import { object, string, number } from 'yup';
import { Modal, useModal } from 'common/components';
import { isBefore, getMonth, getYear, getDay } from 'date-fns';
import { useUser } from 'hooks/useUser';
import Navigator from '../../Navigator';
import { CreditCardForm } from './components';
import { ReviewContentBox, LoadingModalBox } from './styles';
import { useNewProperty } from '../../../NewPropertyContext';
import StepTtitle from '../../StepTtitle';

export const Review = ({ history }) => {
  const { push } = history;
  const { showNotification } = useNotification();
  const { open, triggerModal } = useModal();
  const { currentUser } = useUser();
  const { property, photos } = useNewProperty();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Criando anúncio...');

  const handleGoBack = () => triggerModal();

  const isPremiumPlan = () => property.plan === 'premium-plan';

  const handleFreeActivation = async () => {
    try {
      setIsLoading(true);
      const { plan, ...formData } = property;

      // Creates Property Ad
      const { data: res } = await api.post('properties', {
        ...formData,
        user: currentUser._id,
      });
      setLoadingMessage('Fazendo upload das fotos...');

      // Upload property photos
      const data = new FormData();
      photos.forEach((file, i) => {
        data.append(`photo${i + 1}`, file);
      });
      data.append('userId', currentUser._id);
      await api.put(`properties/upload-photos/${res.data.property._id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoadingMessage('Ativando plano...');

      // Activate property plan
      await api.post(`plans`, {
        type: plan,
        property: res.data.property._id,
      });
      setIsLoading(false);
      setLoadingMessage('Criando anúncio...');
      showNotification(
        'Anúncio criado com sucesso!',
        NOTIFICATION_TYPES.SUCCESS
      );
      push('/');
    } catch (error) {
      setLoadingMessage('Criando anúncio...');
      setIsLoading(false);
      showNotification(
        'Ocorreu um erro ao criar o anúncio',
        NOTIFICATION_TYPES.ERROR
      );
    }
  };

  const handleCancel = () => push('/dashboard');

  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
    validationSchema: object().shape({
      cardName: string()
        .test(
          'valid-name',
          'Informe o nome completo',
          (value) => value.split(' ').length >= 2
        )
        .required(),
      cardNumber: number().min(19).required(),
      expiration: string()
        .min(5)
        .test('min-date', 'Data informada está vencida.', (value) => {
          if (value.length === 5) {
            const [month, year] = value.split('/');
            const date = new Date();
            const actualYear = getYear(date).toString().slice(0, 2) + year;
            const today = new Date(getYear(date), getMonth(date), getDay(date));
            const expiration = new Date(parseInt(actualYear, 10), month);
            return !isBefore(expiration, today);
          }
          return true;
        })
        .required(),
      cvv: string().min(3).required(),
    }),
    async onSubmit() {
      await handleFreeActivation();
    },
  });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AdIcon fontSize="large" color="success" />
        <StepTtitle>Revise o anúncio</StepTtitle>
      </Box>
      <ReviewContentBox>
        <Box sx={{ my: { xs: 2, md: 0 } }}>
          {isPremiumPlan() && (
            <CreditCardForm
              values={values}
              errors={errors}
              onChange={handleChange}
            />
          )}
          <Navigator
            onBack={handleGoBack}
            backButtonText="Cancelar"
            onNext={isPremiumPlan() ? handleSubmit : handleFreeActivation}
            nextButtonText="Criar Anúncio"
          />
        </Box>
        {!!property && (
          <Property
            containerSx={{ minWidth: '65%' }}
            property={{ ...property }}
            photo={photos[0].data}
            isPremium={isPremiumPlan()}
            navigationDisabled
          />
        )}
      </ReviewContentBox>

      <Modal show={open} onClose={triggerModal}>
        <Typography sx={{ mb: 2 }}>
          Tem certeza de que quer deixar para mais tarde?
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row-reverse', xs: 'column' },
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="contained"
            sx={{ my: { xs: 1, md: 0 } }}
            onClick={handleCancel}
          >
            Ativar mais tarde
          </Button>
          <Button
            color="error"
            sx={{ my: { xs: 1, md: 0 } }}
            onClick={triggerModal}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>

      <Modal show={isLoading}>
        <LoadingModalBox sx={{ p: 1 }}>
          <CircularProgress sx={{ mr: 3 }} />
          <Typography>{loadingMessage}</Typography>
        </LoadingModalBox>
      </Modal>
    </>
  );
};
