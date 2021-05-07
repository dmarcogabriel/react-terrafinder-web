import React from 'react';
import Select from 'common/components/Select';
import RangeInput from 'common/components/RangeInput';
import { useFormik } from 'formik';
import { PROPERTY_KINDS, STATES } from './filtersList';
import { Container, SearchButton } from './styles';

export const Filters = ({ onSubmit, className = '' }) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      propertyKind: '',
      state: '',
      size: '',
      amount: '',
    },
    onSubmit() {
      // Here we remove empty fields
      Object.keys(values).forEach((key) => {
        if (!values[key]) delete values[key];
      });

      onSubmit(values);
    },
  });

  return (
    <Container data-testid="filters" className={className}>
      <Select
        id="propertyKind"
        dataTestId="propertyKind"
        valueDataTestId="propertyKindValue"
        label="Tipo de Propriedade"
        options={PROPERTY_KINDS}
        value={values.propertyKind}
        onChange={(e) => handleChange('propertyKind')(e.name)}
      />

      <RangeInput
        dataTestId="propertySize"
        valueDataTestId="propertySizeValue"
        label="Área do Imóvel"
        onChange={(e) => handleChange('size')(JSON.stringify(e))}
      />

      <Select
        dataTestId="state"
        valueDataTestId="stateValue"
        label="Estado"
        options={STATES}
        onChange={(e) => handleChange('state')(e.name)}
      />

      <RangeInput
        dataTestId="amount"
        valueDataTestId="amountValue"
        label="Intervalo de Preço"
        onChange={(e) => handleChange('amount')(JSON.stringify(e))}
      />

      <SearchButton dataTestId="submitButton" onClick={handleSubmit}>
        Procurar Imóvel
      </SearchButton>
    </Container>
  );
};
