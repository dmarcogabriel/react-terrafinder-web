import React from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

export const SelectInput = ({
  value,
  label,
  onChange,
  dataTestId = '',
  options,
  ...props
}) => {
  const handleChange = ({ target: { value: selectedOption } }) => {
    onChange(selectedOption);
  };

  return (
    <FormControl variant="standard" sx={{ width: '100%', my: 2 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        inputProps={{ 'data-testid': dataTestId }}
        value={value}
        onChange={handleChange}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
