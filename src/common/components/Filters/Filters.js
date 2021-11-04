import React from 'react';
import { useFormik } from 'formik';
import { SelectInput, RangeInput } from 'common/components';
import { moneyFormat } from 'utils/formatters';
import { Card, Box, Button } from '@mui/material';
import { PROPERTY_KINDS, STATES } from './filtersList';

export const Filters = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      propertyKind: '',
      state: '',
      size: '[0, 9999]',
      amount: '[0, 999999999]',
    },
    onSubmit() {
      const filters = {};
      if (values.propertyKind) {
        filters.propertyKind = values.propertyKind;
      }
      if (values.state) {
        filters.state = values.state;
      }
      if (values.size) {
        filters.size = values.size;
      }
      if (values.amount) {
        filters.amount = values.amount;
      }

      onSubmit(filters);
    },
  });

  const sizeRangeLabelFormat = (value) => `${value}ah`;

  const amountRangeLabelFormat = (value) => moneyFormat(value);

  return (
    <Card data-testid="filters" sx={{ width: { xs: '80%', md: '50%' } }}>
      <Box sx={{ p: 3 }}>
        <SelectInput
          noValidation
          label="Tipo de Propriedade"
          options={PROPERTY_KINDS}
          onChange={handleChange('propertyKind')}
          dataTestId="propertyKind"
          value={values.propertyKind}
        />

        <RangeInput
          value={values.size}
          dataTestId="propertySize"
          label="Área do Imóvel"
          min={10}
          max={5000}
          minDistance={100}
          step={100}
          valueLabelFormat={sizeRangeLabelFormat}
          onChange={(e) => handleChange('size')(JSON.stringify(e))}
        />

        <SelectInput
          noValidation
          dataTestId="state"
          label="Estado"
          options={STATES}
          value={values.state}
          onChange={handleChange('state')}
        />

        <RangeInput
          value={values.amount}
          dataTestId="amount"
          min={0}
          max={99999999}
          step={1000}
          label="Intervalo de Preço"
          valueLabelFormat={amountRangeLabelFormat}
          onChange={(e) => handleChange('amount')(JSON.stringify(e))}
        />
      </Box>

      <Button
        variant="contained"
        color="warning"
        fullWidth
        sx={{ py: 2 }}
        data-testid="submitButton"
        onClick={handleSubmit}
      >
        Procurar Imóvel
      </Button>
    </Card>
  );
};
