import React from 'react';
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import {
  Mood as ValidIcon,
  SentimentDissatisfied as InvalidIcon,
} from '@mui/icons-material';

const ValidationIcon = ({ errorMessage }) =>
  errorMessage ? (
    <InvalidIcon fontSize="small" color="error" />
  ) : (
    <ValidIcon fontSize="small" color="success" />
  );

export const SelectInput = ({
  value,
  label,
  onChange,
  dataTestId = 'select-input',
  options,
  variant = 'standard',
  noValidation,
  errorMessage,
  isLoading,
  inputProps = {},
  ...props
}) => {
  const handleChange = ({ target: { value: selectedOption } }) => {
    onChange(selectedOption);
  };

  return (
    <Box
      variant={variant}
      sx={{
        width: '100%',
        my: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alingItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <InputLabel error={!!errorMessage}>{label}</InputLabel>
        {!noValidation && <ValidationIcon errorMessage={errorMessage} />}
      </Box>
      <Select
        inputProps={{ 'data-testid': dataTestId, ...inputProps }}
        value={isLoading ? 'Carregando...' : value}
        onChange={handleChange}
        fullWidth
        size="small"
        error={!!errorMessage}
        disabled={isLoading}
        {...props}
      >
        {!isLoading &&
          options.map((option, i) => (
            <MenuItem
              data-testid={`option-${i}`}
              key={String(i)}
              value={option}
            >
              {option}
            </MenuItem>
          ))}
      </Select>
      {!!errorMessage && (
        <FormHelperText sx={{ ml: '14px' }} error>
          {errorMessage}
        </FormHelperText>
      )}
    </Box>
  );
};
