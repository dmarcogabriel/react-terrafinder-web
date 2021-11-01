import React, { useState } from 'react';
import { Slider, InputLabel, Box } from '@mui/material';

export const RangeInput = ({
  label,
  value: defaultValue,
  onChange,
  dataTestId,
  minDistance = 10,
  ...props
}) => {
  const parseDefaultValue = () => {
    try {
      if (typeof defaultValue === 'string') return JSON.parse(defaultValue);
      if (Array.isArray(defaultValue)) return defaultValue;
      throw new Error(
        'defaultValue must be a Array of min and max numeric values.'
      );
    } catch (error) {
      throw new Error(
        'defaultValue must be a Array of min and max numeric values.'
      );
    }
  };

  const [value, setValue] = useState(parseDefaultValue() || [0, 10]);

  const handleChange = (_, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    let changedValue;
    if (activeThumb === 0) {
      changedValue = [Math.min(newValue[0], value[1] - minDistance), value[1]];
      setValue(changedValue);
    } else {
      changedValue = [value[0], Math.max(newValue[1], value[0] + minDistance)];
      setValue(changedValue);
    }
    onChange(changedValue);
  };

  // todo: change colors
  return (
    <Box>
      <InputLabel>{label}</InputLabel>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        data-testid={dataTestId}
        disableSwap
        {...props}
      />
    </Box>
  );
};
