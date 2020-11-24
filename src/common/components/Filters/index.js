import React from 'react';
import Select from 'common/components/Select';
import Button from 'common/components/Button';
import RangeInput from 'common/components/RangeInput';
import { useFormik } from 'formik';
import cn from 'classnames';
import './styles.scss';

import { PROPERTY_KINDS, STATES } from './filters';

export default function Filters({ onSubmit, className }) {
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
    <div
      data-testid="filters"
      className={cn('Filters__container', className && className)}
    >
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

      <Button
        dataTestId="submitButton"
        className="searchButton"
        onClick={handleSubmit}
      >
        Procurar Imóvel
      </Button>
    </div>
  );
}
