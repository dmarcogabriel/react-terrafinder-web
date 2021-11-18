import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Card, Typography, Box, Button } from '@mui/material';
import { Announcement as AdIcon } from '@mui/icons-material';
import api from 'services/api';
import Property from 'common/components/Property';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { useFormik } from 'formik';
import { object, string, number } from 'yup';
import { Modal, useModal } from 'common/components';
import { isBefore, getMonth, getYear, getDay } from 'date-fns';
import { useUser } from 'hooks/useUser';
import Navigator from '../Navigator';
import { CreatePropertyContainer } from '../components';
import { CreditCardForm } from './components';
import { ReviewContentBox } from './styles';

export const Review = () => {
  const history = useHistory();
  const { state } = useLocation();
  const [property, setProperty] = useState();
  const { showNotification } = useNotification();
  const { open, triggerModal } = useModal();
  const { currentUser, setUserPlan } = useUser();

  const handleGoBack = () => {
    triggerModal();
  };

  const loadProperty = async () => {
    const { data: res } = await api.get(`properties/${state.propertyId}`);
    setProperty(res.data.property);
  };

  const isPremiumPlan = () => state.plan === 'premium-plan';

  const handleFreeActivation = async () => {
    try {
      const { data: res } = await api.post(`plans`, {
        type: state.plan,
        property: state.propertyId,
      });
      showNotification(res.message, NOTIFICATION_TYPES.SUCCESS);
      history.push('/dashboard');
    } catch (error) {
      showNotification('Ocorreu algum erro', NOTIFICATION_TYPES.ERROR);
    }
  };

  const handleCancel = () => history.push('/dashboard');

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

  useEffect(() => {
    loadProperty();
  }, []);

  return (
    <CreatePropertyContainer>
      <Card
        sx={{
          p: 3,
          mx: { xs: 2, md: 0 },
          my: { xs: 2, md: 0 },
          width: { md: '100%' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AdIcon fontSize="large" color="success" />
          <Typography sx={{ my: 3 }} variant="h5" component="h1">
            Revise seu anúncio
          </Typography>
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
              backButtonText="Mais tarde"
              onNext={isPremiumPlan() ? handleSubmit : handleFreeActivation}
              nextButtonText="Ativar Anúncio"
            />
          </Box>
          {!!property && (
            <Property
              containerSx={{ minWidth: '65%' }}
              property={property}
              isPremium={isPremiumPlan()}
              navigationDisabled
            />
          )}
        </ReviewContentBox>
      </Card>
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
    </CreatePropertyContainer>
  );
};
