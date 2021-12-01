import React from 'react';
import { useFormik } from 'formik';
import { SelectInput, RangeInput } from 'common/components';
import { moneyFormat } from 'utils/formatters';
import { Card, Box, Button } from '@mui/material';
import api from 'services/api';
import queryString from 'query-string';
import { omitBy } from 'lodash';

export const Filters = ({ onSubmit, showCleanButton = false }) => {
  const [filters, setFilters] = React.useState({
    kinds: [],
    states: [],
  });
  const [isLoading, setIsLoading] = React.useState(true);

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      propertyKind: '',
      state: '',
      size: '[1, 350]',
      amount: '[5000, 50000000]',
    },
    onSubmit({ amount, size, ...formData }) {
      const [amountMin, amountMax] = JSON.parse(amount);
      const [sizeMin, sizeMax] = JSON.parse(size);
      onSubmit(
        omitBy(
          { amountMin, amountMax, sizeMin, sizeMax, ...formData },
          (value) => !value
        )
      );
    },
  });

  const sizeRangeLabelFormat = (value) => `${value}ah`;

  const amountRangeLabelFormat = (value) => moneyFormat(value);

  const handleCleanFilters = () => resetForm();

  const loadFilters = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `properties/filters?${queryString.stringify({ isActive: true })}`
      );
      setFilters(response.data.filters);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadFilters();
  }, [loadFilters]);

  return (
    <Card data-testid="filters" sx={{ width: { xs: '80%', md: '50%' } }}>
      <Box sx={{ p: 3 }}>
        <SelectInput
          noValidation
          label="Tipo de Propriedade"
          options={filters.kinds}
          onChange={handleChange('propertyKind')}
          dataTestId="propertyKind"
          value={values.propertyKind}
          isLoading={isLoading}
        />
        <RangeInput
          value={values.size}
          dataTestId="propertySize"
          label="Área do Imóvel"
          min={1}
          max={350}
          minDistance={10}
          step={10}
          valueLabelFormat={sizeRangeLabelFormat}
          onChange={(e) => handleChange('size')(JSON.stringify(e))}
        />
        <SelectInput
          noValidation
          dataTestId="state"
          label="Estado"
          options={filters.states}
          value={values.state}
          onChange={handleChange('state')}
          isLoading={isLoading}
        />
        <RangeInput
          value={values.amount}
          dataTestId="amount"
          min={5000}
          max={50000000}
          step={1000}
          minDistance={1000}
          label="Intervalo de Preço"
          valueLabelFormat={amountRangeLabelFormat}
          onChange={(e) => handleChange('amount')(JSON.stringify(e))}
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{ py: 2 }}
        data-testid="submitButton"
        onClick={handleSubmit}
      >
        Procurar Imóvel
      </Button>
      {showCleanButton && (
        <Button fullWidth onClick={handleCleanFilters}>
          Limpar Filtros
        </Button>
      )}
    </Card>
  );
};
