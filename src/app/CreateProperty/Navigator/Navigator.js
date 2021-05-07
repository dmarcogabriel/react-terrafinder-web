import React from 'react';
import { Container, BackButton, NextButton } from './styles';

export const Navigator = ({ onBack, onNext, nextButtonText = 'Próximo' }) => (
  <Container>
    <BackButton data-testid="back" onClick={onBack}>
      Voltar
    </BackButton>

    <NextButton dataTestId="next" onClick={onNext}>
      {nextButtonText}
    </NextButton>
  </Container>
);
