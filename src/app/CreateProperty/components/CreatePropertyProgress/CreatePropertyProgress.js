import React from 'react';
import { Typography } from '@mui/material';
import {
  Container,
  Children,
  ProgressContainer,
  ProgressSteps,
  StepBox,
  StepContent,
  StepNumber,
  StepNumberBox,
  Content,
} from './styles';
import { STEPS } from './steps.obj';
import { useNewProperty } from '../../NewPropertyContext';

export const CreatePropertyProgress = ({ children }) => {
  const { step: currentStep } = useNewProperty();

  const isActive = (step) => step === `${currentStep}`;

  return (
    <Container>
      <Children sx={{ py: 2, px: { xs: 2, md: 5 } }}>
        <Content elevation={4} sx={{ p: 2 }}>
          {children}
        </Content>
      </Children>
      <ProgressContainer sx={{ py: { md: 5, xs: 0 }, pr: { md: 2, xs: 0 } }}>
        <ProgressSteps>
          {STEPS.map((step) => (
            <StepBox
              key={step.id}
              isActive={isActive(step.number)}
              sx={{ ml: { md: -2, xs: 2 }, mr: { md: 0, xs: 2 } }}
            >
              <StepNumberBox
                sx={{ p: 2, mr: 3 }}
                isActive={isActive(step.number)}
              >
                <StepNumber isActive={isActive(step.number)}>
                  {step.number}
                </StepNumber>
              </StepNumberBox>
              <StepContent
                sx={{ p: 1 }}
                eletavion={0}
                isActive={isActive(step.number)}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.text}</Typography>
              </StepContent>
            </StepBox>
          ))}
        </ProgressSteps>
      </ProgressContainer>
    </Container>
  );
};
