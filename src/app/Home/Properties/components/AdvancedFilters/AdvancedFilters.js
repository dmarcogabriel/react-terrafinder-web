import React from 'react';
import { TextInput, SelectInput } from 'common/components';
import { Card, CardContent, Box, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useFormik } from 'formik';
import api from 'services/api';
import { useQuery } from 'react-query';
import { maskMoney } from 'utils/masks';
import { omitBy } from 'lodash';
import { AdvancedFiltersForms, InlineFilters } from './styles';

export const AdvancedFilters = ({ onSearch }) => {
  const { data, isLoading } = useQuery('filters', () =>
    api.get('properties/filters')
  );

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: {
      state: '',
      city: '',
      size: '',
      propertyKind: '',
      amountMin: '',
      amountMax: '',
      code: '',
    },
    async onSubmit(formData) {
      // * Removes empty fields
      console.log(formData);
      onSearch(omitBy(formData, (value) => !value));
    },
  });

  const handleCleanFilters = () => {
    resetForm();
    handleSubmit();
  };

  return (
    <Card sx={{ my: 1 }}>
      <CardContent>
        {!!data && (
          <AdvancedFiltersForms sx={{ my: 1 }}>
            <InlineFilters>
              <SelectInput
                label="Estado"
                noValidation
                value={values.state}
                options={data.data.filters.states}
                onChange={handleChange('state')}
                isLoading={isLoading}
              />
              <TextInput
                label="Cidade"
                noValidation
                value={values.city}
                onChange={handleChange('city')}
              />
              <SelectInput
                label="Área da propriedade"
                options={data.data.filters.sizes}
                noValidation
                value={values.size}
                onChange={handleChange('size')}
                isLoading={isLoading}
              />
            </InlineFilters>
            <InlineFilters>
              <SelectInput
                label="Tipo de propriedade"
                options={data.data.filters.kinds}
                noValidation
                value={values.propertyKind}
                onChange={handleChange('propertyKind')}
                isLoading={isLoading}
              />
              <TextInput
                label="De"
                noValidation
                formatter={maskMoney}
                value={values.amountMin}
                onChange={handleChange('amountMin')}
              />
              <TextInput
                label="Até"
                noValidation
                formatter={maskMoney}
                value={values.amountMax}
                onChange={handleChange('amountMax')}
              />
              <TextInput
                label="Código do imóvel"
                noValidation
                value={values.code}
                onChange={handleChange('code')}
              />
            </InlineFilters>
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
