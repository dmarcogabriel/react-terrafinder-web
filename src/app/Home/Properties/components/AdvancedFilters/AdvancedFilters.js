import React from 'react';
import { TextInput, SelectInput } from 'common/components';
import { Box, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useFormik } from 'formik';
import api from 'services/api';
import { useQuery } from 'react-query';
import { maskMoney } from 'utils/masks';
import { AdvancedFiltersForms } from './styles';

export const AdvancedFilters = ({ onSearch }) => {
  const { data, isLoading } = useQuery('filters', () =>
    api.get('properties/filters')
  );

  const { values, handleChange, handleSubmit } = useFormik({
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
      console.log(formData);
    },
  });

  return (
    <Box sx={{ my: 1 }}>
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
            onChange={handleChange('amontMin')}
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
        <Button>Limpar filtros</Button>
      </Box>
    </Box>
  );
};
