import React from 'react';
import Input from 'common/components/Input';
import TextArea from 'common/components/TextArea';
import Select from 'common/components/Select';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useUser } from 'hooks/useUser';
import { useHistory } from 'react-router-dom';
import classes from './GeneralForm.module.scss';
import Navigator from '../Navigator';
import PROPERTY_KINDS from './propertyKinds';
import { CreatePropertyContainer } from '../components';

export const GeneralForm = () => {
  const { currentUser } = useUser();
  const history = useHistory();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      ownerName: currentUser ? currentUser.firstName : '',
      description: '',
      propertyKind: '',
      state: '',
      nearbyCity: '',
      cep: '',
    },
    validationSchema: object().shape({
      name: string().required('Campo obrigatório'),
      ownerName: string().required('Campo obrigatório'),
      description: string().required('Campo obrigatório'),
      propertyKind: string().required('Campo obrigatório'),
      state: string().required('Campo obrigatório'),
      nearbyCity: string().required('Campo obrigatório'),
      cep: string().required('Campo obrigatório'),
    }),
    async onSubmit() {
      console.log('%cEntrou aqui', 'color: cyan');
      history.push('/create-property/details?step=2', { values });
    },
  });

  return (
    <CreatePropertyContainer>
      <div className={classes.generalForm}>
        <div className={classes.inlineInputs}>
          <Input
            dataTestId="propNameInput"
            label="Nome da Propriedade"
            value={values.name}
            onChange={handleChange('name')}
            errorMessage={errors.name}
          />
          <Input
            dataTestId="ownerNameInput"
            label="Nome do Proprietário"
            value={values.ownerName}
            onChange={handleChange('ownerName')}
            errorMessage={errors.ownerName}
          />
        </div>

        <TextArea
          dataTestId="descInput"
          label="Descrição"
          value={values.description}
          onChange={handleChange('description')}
          errorMessage={errors.description}
        />
        <Select
          dataTestId="propertyKind"
          valueDataTestId="propertyKindValue"
          label="Tipo de Imóvel"
          options={PROPERTY_KINDS}
          value={values.propertyKind}
          onChange={(e) => handleChange('propertyKind')(e.name)}
          errorMessage={errors.propertyKind}
        />

        <div className={classes.inlineInputs}>
          <Input
            dataTestId="stateInput"
            label="Estado (em que o imóvel se encontra)"
            value={values.state}
            onChange={handleChange('state')}
            maxLength={2}
            errorMessage={errors.state}
          />
          <Input
            dataTestId="nearbyInput"
            label="Cidade Mais Próxima ao imóvel"
            value={values.nearbyCity}
            onChange={handleChange('nearbyCity')}
            errorMessage={errors.nearbyCity}
          />
        </div>

        <Input
          dataTestId="cepInput"
          label="CEP da Propriedade"
          value={values.cep}
          onChange={handleChange('cep')}
          errorMessage={errors.cep}
        />

        <Navigator onBack={history.goBack} onNext={handleSubmit} />
      </div>
    </CreatePropertyContainer>
  );
};
