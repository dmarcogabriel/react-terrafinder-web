import React from 'react';
import { Button } from '@mui/material';
import { NavigationContainer } from './styles';

export const Navigator = ({
  onBack,
  backButtonText = 'Voltar',
  onNext,
  nextButtonText = 'Próximo',
}) => (
  <NavigationContainer sx={{ px: { md: 0, xs: 2 }, mt: 2 }}>
    <Button sx={{ my: { xs: 1, md: 0 } }} data-testid="back" onClick={onBack}>
      {backButtonText}
    </Button>

    <Button
      sx={{ my: { xs: 1, md: 0 } }}
      variant="contained"
      data-testid="next"
      onClick={onNext}
    >
      {nextButtonText}
    </Button>
  </NavigationContainer>
);
