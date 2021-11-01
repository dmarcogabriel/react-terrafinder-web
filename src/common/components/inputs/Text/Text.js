import React from 'react';
import { Box, TextField, InputLabel } from '@mui/material';
import {
  Mood as ValidIcon,
  SentimentDissatisfied as InvalidIcon,
} from '@mui/icons-material';

export const TextInput = ({
  label,
  value,
  onChange,
  errorMessage,
  dataTestId,
  inputProps,
  formatter,
  containerSx = {},
  ...props
}) => {
  const handleChange = ({ target: { value: text } }) => {
    if (formatter) {
      onChange(formatter(text));
    } else {
      onChange(text);
    }
  };

  return (
    <Box sx={containerSx}>
      <Box
        sx={{
          display: 'flex',
          alingItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <InputLabel>{label}</InputLabel>
        {errorMessage ? (
          <InvalidIcon fontSize="small" color="error" />
        ) : (
          <ValidIcon fontSize="small" color="success" />
        )}
      </Box>
      <TextField
        size="small"
        fullWidth
        value={value}
        onChange={handleChange}
        error={!!errorMessage}
        helperText={errorMessage}
        inputProps={{ 'data-testid': dataTestId, ...inputProps }}
        {...props}
      />
    </Box>
  );
};
