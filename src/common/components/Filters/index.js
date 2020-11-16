import React from 'react';
import { Select, Button } from 'common/components';
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
    <div className={cn('Filters__container', className && className)}>
      <Select
        id="propertyKind"
        label="Tipo de Propriedade"
        options={PROPERTY_KINDS}
        value={values.propertyKind}
        onChange={(e) => handleChange('propertyKind')(e.name)}
      />

      <RangeInput
        label="Área do Imóvel"
        onChange={(e) => handleChange('size')(JSON.stringify(e))}
      />

      <Select
        label="Estado"
        options={STATES}
        onChange={(e) => handleChange('state')(e.name)}
      />

      <RangeInput
        label="Intervalo de Preço"
        onChange={(e) => handleChange('amount')(JSON.stringify(e))}
      />

      <Button className="searchButton" onClick={handleSubmit}>
        Procurar Imóvel
      </Button>
    </div>
  );
}
