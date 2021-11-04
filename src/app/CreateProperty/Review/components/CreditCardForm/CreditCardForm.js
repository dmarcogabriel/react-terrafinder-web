import React from 'react';
import { Box } from '@mui/material';
import { TextInput } from 'common/components';
import { maskCardNumber, maskShortDate, maskNumber } from 'utils/masks';

export const CreditCardForm = ({ onChange, values, errors }) => (
  <Box>
    <TextInput
      label="Nome no cartão"
      value={values.cardName}
      errorMessage={errors.cardName}
      onChange={onChange('cardName')}
      containerSx={{ my: 1 }}
    />
    <TextInput
      label="Número do cartão"
      value={values.cardNumber}
      errorMessage={errors.cardNumber}
      onChange={onChange('cardNumber')}
      containerSx={{ my: 1 }}
      formatter={maskCardNumber}
      inputProps={{ maxLength: 19 }}
    />
    <TextInput
      label="Data de vencimento"
      value={values.expiration}
      errorMessage={errors.expiration}
      onChange={onChange('expiration')}
      inputProps={{ maxLength: 5 }}
      containerSx={{ my: 1 }}
      formatter={maskShortDate}
    />
    <TextInput
      label="CVV"
      value={values.cvv}
      errorMessage={errors.cvv}
      onChange={onChange('cvv')}
      inputProps={{ maxLength: 3 }}
      containerSx={{ my: 1 }}
      formatter={maskNumber}
    />
  </Box>
);
