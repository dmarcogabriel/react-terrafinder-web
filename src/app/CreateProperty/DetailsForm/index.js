import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import api from 'services/api';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { validateArrayOfInputs } from 'utils/validators';
import { useUser } from 'hooks/useUser';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { TextInput } from 'common/components';
import { Box, Typography, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { maskMoney } from 'utils/masks';
import classes from './DetailsForm.module.scss';
import Navigator from '../Navigator';
import { CreatePropertyContainer } from '../components';

export const DetailsForm = () => {
  const { state } = useLocation();
  const [farming, setFarming] = useState([{ value: '', error: '' }]);
  const [activities, setActivities] = useState([{ value: '', error: '' }]);
  const history = useHistory();
  const { currentUser } = useUser();
  const { showNotification } = useNotification();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      amount: '',
      size: '',
    },
    validationSchema: object().shape({
      amount: string().required('Campo obrigatório'),
      size: string().required('Campo obrigatório'),
    }),
    async onSubmit() {
      if (validateArrayOfInputs(activities) && validateArrayOfInputs(farming)) {
        try {
          const { plan } = state;
          const { data: response } = await api.post('properties', {
            ...values,
            ...state.property,
            user: currentUser._id,
            activities: activities.map((activity) => activity.value),
            farming: farming.map((farm) => farm.value),
          });

          showNotification(
            'Propriedade criada com sucesso!',
            NOTIFICATION_TYPES.SUCCESS
          );

          history.push(
            `/create-property/upload-photos/${response.data.property._id}?step=4`,
            { plan }
          );
        } catch (err) {
          console.error('[ERROR]: ', err);
          showNotification(
            'Ops, ocorreu um erro na operação',
            NOTIFICATION_TYPES.ERROR
          );
        }
      } else {
        farming.forEach((farm) => {
          if (!farm.value) {
            farm.error = 'Campo obrigatório';
          }
        });

        activities.forEach((activity) => {
          if (!activity.value) {
            activity.error = 'Campo obrigatório';
          }
        });
      }
    },
  });

  const addActivity = () => {
    if (activities.length < 5)
      setActivities((old) => [...old, { value: '', error: '' }]);
  };

  const addFarming = () => {
    if (farming.length < 5)
      setFarming((old) => [...old, { value: '', error: '' }]);
  };

  const handleChangeActivity = (e, i) => {
    setActivities(
      activities.map((act, index) => (i === index ? { value: e } : act))
    );
  };

  const handleChangeFarm = (e, i) => {
    setFarming(
      farming.map((farm, index) => (i === index ? { value: e } : farm))
    );
  };

  const goBack = () => history.goBack();

  return (
    <CreatePropertyContainer>
      <div className={classes.detailsForm}>
        <div className={classes.inlineInputs}>
          <TextInput
            label="Quanto quer pela propriedade?"
            inputProps={{ maxLength: 14 }}
            value={values.amount}
            onChange={handleChange('amount')}
            errorMessage={errors.amount}
            formatter={maskMoney}
            prefix="R$"
          />
          <TextInput
            label="Qual o tamanho da propriedade (em equitares)"
            value={values.size}
            onChange={handleChange('size')}
            errorMessage={errors.size}
            inputProps={{ maxLength: 4 }}
          />
        </div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'space-between',
            my: 2,
          }}
        >
          <Box>
            <Typography>Cultivo (plantações)</Typography>
            <Box data-testid="farms">
              {farming.map((farm, i) => (
                <TextInput
                  label={`Cultivo #${i + 1}`}
                  key={String(i)}
                  dataTestId={`farming-input-${i}`}
                  value={farm.value}
                  onChange={(e) => handleChangeFarm(e, i)}
                  errorMessage={farm.error}
                />
              ))}
              <IconButton
                variant="contained"
                color="success"
                data-testid="add-farming-button"
                onClick={addFarming}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography>Atividades e destaques</Typography>
            <Box data-testid="activities">
              {activities.map((activity, i) => (
                <TextInput
                  label={`Atividade #${i + 1}`}
                  key={String(i)}
                  dataTestId={`activity-input-${i}`}
                  value={activity.value}
                  onChange={(e) => handleChangeActivity(e, i)}
                  errorMessage={activity.error}
                />
              ))}
              <IconButton
                variant="contained"
                color="success"
                data-testid="add-activity-button"
                onClick={addActivity}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Navigator
          onBack={goBack}
          onNext={handleSubmit}
          nextButtonText="Cadastrar"
        />
      </div>
    </CreatePropertyContainer>
  );
};
