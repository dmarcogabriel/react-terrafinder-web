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
    <Button
      sx={{ my: { xs: 1, md: 0 } }}
      variant="contained"
      color="info"
      data-testid="next"
      onClick={onNext}
    >
      {nextButtonText}
    </Button>

    <Button
      color="info"
      sx={{ my: { xs: 1, md: 0 } }}
      data-testid="back"
      onClick={onBack}
    >
      {backButtonText}
    </Button>
  </NavigationContainer>
);
