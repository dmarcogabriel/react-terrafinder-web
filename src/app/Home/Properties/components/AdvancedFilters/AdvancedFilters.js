import React from 'react';
import { TextInput, SelectInput, RangeInput } from 'common/components';
import { Card, CardContent, Box, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useFormik } from 'formik';
import api from 'services/api';
import { useQuery } from 'react-query';
import { omitBy, isEmpty } from 'lodash';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { moneyFormat } from 'utils/formatters';
import { AdvancedFiltersForms } from './styles';

export const AdvancedFilters = ({ onSearch }) => {
  const { search } = useLocation();
  const { data, isLoading } = useQuery('filters', () =>
    api.get('properties/filters')
  );

  const parseQueryValues = (name, defaultValue) => {
    const queryObj = parse(search);
    if (!isEmpty(queryObj)) {
      const values = [];
      [`${name}Min`, `${name}Max`].forEach((key) => {
        if (queryObj[key]) values.push(parseInt(queryObj[key], 10));
      });
      return isEmpty(values) ? defaultValue : JSON.stringify(values);
    }
    return defaultValue;
  };

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      state: parse(search).state || '',
      nearbyCity: '',
      size: parseQueryValues('size', '[1, 350]'),
      propertyKind: parse(search).propertyKind || '',
      amount: parseQueryValues('amount', '[5000, 50000000]'),
      code: '',
    },
    async onSubmit({ amount, size, ...formData }) {
      const [amountMin, amountMax] = JSON.parse(amount);
      const [sizeMin, sizeMax] = JSON.parse(size);
      // * Removes empty fields
      onSearch(
        omitBy(
          { amountMin, amountMax, sizeMin, sizeMax, ...formData },
          (value) => !value
        )
      );
    },
  });

  const handleCleanFilters = () => {
    setValues({
      state: '',
      nearbyCity: '',
      size: '[1, 350]',
      propertyKind: '',
      amount: '[5000, 50000000]',
      code: '',
    });
    handleSubmit();
  };

  const sizeRangeLabelFormat = (value) => `${value}ah`;
  const amountRangeLabelFormat = (value) => moneyFormat(value);

  return (
    <Card sx={{ my: 1 }}>
      <CardContent>
        {!!data && (
          <AdvancedFiltersForms sx={{ my: 1 }}>
            <SelectInput
              label="Estado"
              noValidation
              value={values.state}
              options={data.data.filters.states}
              onChange={handleChange('state')}
              isLoading={isLoading}
            />
            <TextInput
              label="Cidade mais Próxima"
              noValidation
              value={values.nearbyCity}
              onChange={handleChange('nearbyCity')}
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
              label="Tipo de propriedade"
              options={data.data.filters.kinds}
              noValidation
              value={values.propertyKind}
              onChange={handleChange('propertyKind')}
              isLoading={isLoading}
            />
            <RangeInput
              value={values.amount}
              dataTestId="propertyAmount"
              label="Intervalo de Preço"
              min={5000}
              max={50000000}
              minDistance={1000}
              step={1000}
              valueLabelFormat={amountRangeLabelFormat}
              onChange={(e) => handleChange('amount')(JSON.stringify(e))}
            />
            <TextInput
              label="Código do imóvel"
              noValidation
              value={values.code}
              onChange={handleChange('code')}
            />
          </AdvancedFiltersForms>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: { xs: 0, md: 60 },
            my: 1,
          }}
        >
          <Button
            sx={{ my: 1 }}
            startIcon={<SearchIcon />}
            variant="contained"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Buscar
          </Button>
          <Button onClick={handleCleanFilters}>Limpar filtros</Button>
        </Box>
      </CardContent>
    </Card>
  );
};
