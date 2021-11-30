import React from 'react';
import { TextInput, SelectInput } from 'common/components';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useUser } from 'hooks/useUser';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { maskCep } from 'utils/masks';
import { Announcement as AdIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import api from 'services/api';
import { useQuery } from 'react-query';
import classes from './BasicInfoForm.module.scss';
import Navigator from '../../Navigator';
import { PROPERTY_KINDS, AD_TYPES } from './propertyKinds';
import { useNewProperty } from '../../../NewPropertyContext';
import StepTitle from '../../StepTtitle';

export const BasicInfoForm = () => {
  const { currentUser } = useUser();
  const history = useHistory();
  const { state } = useLocation();
  const { nextStep, updateProperty } = useNewProperty();
  const { path } = useRouteMatch();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      ownerName: currentUser
        ? `${currentUser.firstName} ${currentUser.lastName}`
        : '',
      description: '',
      propertyKind: '',
      state: '',
      nearbyCity: '',
      cep: '',
    },
    validationSchema: object().shape({
      name: string().required('Campo obrigatório'),
      ownerName: string().required('Campo obrigatório'),
      description: string().min(6).required('Campo obrigatório'),
      propertyKind: string().required('Campo obrigatório'),
      state: string()
        .max(2, 'Estado deve ter 2 letras')
        .required('Campo obrigatório'),
      nearbyCity: string().required('Campo obrigatório'),
      cep: string()
        .min(9, 'Cep deve conter ao menos 8 caracteres')
        .max(9, 'Cep deve conter 8 caracteres')
        .required('Campo obrigatório'),
    }),
    async onSubmit() {
      updateProperty(values);
      history.push(`/create-property/details`);
      nextStep();
    },
  });

  const { data, isLoading } = useQuery('locations', () =>
    api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
      params: {
        orderBy: 'nome',
      },
    })
  );

  return (
    <div className={classes.generalForm}>
      <Box sx={{ textAlign: 'center' }}>
        <AdIcon fontSize="large" color="success" />
        <StepTitle>Informações do Anúncio</StepTitle>
      </Box>
      <div className={classes.inlineInputs}>
        <TextInput
          inputProps={{ 'data-testid': 'propNameInput' }}
          label="Nome da Propriedade"
          value={values.name}
          onChange={handleChange('name')}
          errorMessage={errors.name}
          containerSx={{ mr: { xs: 0, md: 1 } }}
        />
        <TextInput
          inputProps={{ 'data-testid': 'ownerNameInput' }}
          label="Nome do Proprietário"
          value={values.ownerName}
          onChange={handleChange('ownerName')}
          errorMessage={errors.ownerName}
          containerSx={{ ml: { xs: 0, md: 1 } }}
        />
      </div>

      <TextInput
        inputProps={{ 'data-testid': 'descInput' }}
        label="Descrição"
        value={values.description}
        onChange={handleChange('description')}
        errorMessage={errors.description}
        multiline
        rows={3}
      />
      <div className={classes.inlineInputs}>
        <SelectInput
          variant="outlined"
          inputProps={{ 'data-testid': 'propertyKind' }}
          label="Tipo de Imóvel"
          options={PROPERTY_KINDS}
          value={values.propertyKind}
          onChange={handleChange('propertyKind')}
          errorMessage={errors.propertyKind}
          size="small"
          containerSx={{ mr: { xs: 0, md: 1 } }}
        />
        <SelectInput
          variant="outlined"
          inputProps={{ 'data-testid': 'adType' }}
          label="Tipo de de Anúncio"
          options={AD_TYPES}
          value={values.propertyKind}
          onChange={handleChange('propertyKind')}
          errorMessage={errors.propertyKind}
          size="small"
          containerSx={{ ml: { xs: 0, md: 1 } }}
        />
      </div>

      <div className={classes.inlineInputs}>
        <SelectInput
          label="Estado (em que o imóvel se encontra)"
          value={values.state}
          options={data ? data.data.map((uf) => uf.sigla) : []}
          isLoading={isLoading}
          onChange={handleChange('state')}
          inputProps={{ maxLength: 2, 'data-testid': 'stateInput' }}
          errorMessage={errors.state}
          containerSx={{ mr: { xs: 0, md: 1 } }}
        />
        <TextInput
          inputProps={{ 'data-testid': 'nearbyInput' }}
          label="Cidade Mais Próxima ao imóvel"
          value={values.nearbyCity}
          onChange={handleChange('nearbyCity')}
          errorMessage={errors.nearbyCity}
          containerSx={{ ml: { xs: 0, md: 1 } }}
        />
      </div>

      <TextInput
        label="CEP da Propriedade"
        value={values.cep}
        onChange={handleChange('cep')}
        formatter={maskCep}
        errorMessage={errors.cep}
        inputProps={{ maxLength: 9, 'data-testid': 'cepInput' }}
      />

      <Navigator onBack={history.goBack} onNext={handleSubmit} />
    </div>
  );
};
