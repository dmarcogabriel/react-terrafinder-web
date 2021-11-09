import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { TextInput } from 'common/components';
import { Add as AddIcon } from '@mui/icons-material';

export const MultiTextField = ({ label, values = [], onChange }) => {
  const handleChange = (newValue, index) => {
    if (onChange)
      onChange(
        values.map((value, i) => {
          if (i === index) return newValue;
          return value;
        })
      );
  };

  const handleAddInput = () => {
    if (onChange) onChange([...values, '']);
  };

  return (
    <Box>
      <Typography>{label}</Typography>
      <Box data-testid={`${label}-input-box`}>
        {values.map((value, i) => (
          <TextInput
            label={`Campo #${i + 1}`}
            key={String(i)}
            dataTestId={`${label}-input-${i}`}
            value={value}
            onChange={(newValue) => handleChange(newValue, i)}
            // errorMessage={farm.error}
          />
        ))}
        <IconButton
          variant="contained"
          color="success"
          data-testid={`add-${label}-button`}
          onClick={handleAddInput}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
