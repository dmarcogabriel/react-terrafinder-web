import React from 'react';
import { TextInput, SelectInput } from 'common/components';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useUser } from 'hooks/useUser';
import { useHistory, useLocation } from 'react-router-dom';
import { maskCep } from 'utils/masks';
import classes from './GeneralForm.module.scss';
import Navigator from '../Navigator';
import PROPERTY_KINDS from './propertyKinds';
import { CreatePropertyContainer } from '../components';

export const GeneralForm = () => {
  const { currentUser } = useUser();
  const history = useHistory();
  const { state } = useLocation();

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
      history.push('/create-property/details?step=3', {
        property: { ...values },
        plan: state.plan,
      });
    },
  });

  return (
    <CreatePropertyContainer>
      <div className={classes.generalForm}>
        <div className={classes.inlineInputs}>
          <TextInput
            inputProps={{ 'data-testid': 'propNameInput' }}
            label="Nome da Propriedade"
            value={values.name}
            onChange={handleChange('name')}
            errorMessage={errors.name}
          />
          <TextInput
            inputProps={{ 'data-testid': 'ownerNameInput' }}
            label="Nome do Proprietário"
            value={values.ownerName}
            onChange={handleChange('ownerName')}
            errorMessage={errors.ownerName}
          />
        </div>

        <TextInput
          inputProps={{ 'data-testid': 'descInput' }}
          label="Descrição"
          value={values.description}
          onChange={handleChange('description')}
          errorMessage={errors.description}
          multiline
          rows={5}
        />
        <SelectInput
          variant="outlined"
          inputProps={{ 'data-testid': 'propertyKind' }}
          label="Tipo de Imóvel"
          options={PROPERTY_KINDS}
          value={values.propertyKind}
          onChange={handleChange('propertyKind')}
          errorMessage={errors.propertyKind}
          size="small"
        />

        <div className={classes.inlineInputs}>
          <TextInput
            label="Estado (em que o imóvel se encontra)"
            value={values.state}
            onChange={handleChange('state')}
            inputProps={{ maxLength: 2, 'data-testid': 'stateInput' }}
            errorMessage={errors.state}
          />
          <TextInput
            inputProps={{ 'data-testid': 'nearbyInput' }}
            label="Cidade Mais Próxima ao imóvel"
            value={values.nearbyCity}
            onChange={handleChange('nearbyCity')}
            errorMessage={errors.nearbyCity}
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
    </CreatePropertyContainer>
  );
};
