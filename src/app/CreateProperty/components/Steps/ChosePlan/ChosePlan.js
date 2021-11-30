import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { Announcement as AdIcon } from '@mui/icons-material';
import { moneyFormat } from 'utils/formatters';
import { green, grey } from '@mui/material/colors';
import Navigator from '../../Navigator';
import { PLANS } from './plans.obj';
import { PlansBox, PlanPaper } from './styles';
import { useNewProperty } from '../../../NewPropertyContext';
import StepTitle from '../../StepTtitle';

export const ChosePlan = () => {
  const history = useHistory();
  const { nextStep, updateProperty } = useNewProperty();
  const [selectedPlan, setSelectedPlan] = useState('free-plan');

  const handleNext = () => {
    updateProperty({ plan: selectedPlan });
    history.push(`create-property/basic-info`);
    nextStep();
  };

  const handleSelectPlan = (plan) => setSelectedPlan(plan.key);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 8,
        }}
      >
        <AdIcon fontSize="large" color="success" />
        <StepTitle>Escolha o plano de anúncio</StepTitle>
        <PlansBox>
          {PLANS.map((plan) => (
            <PlanPaper
              key={plan.key}
              selected={selectedPlan === plan.key}
              elevation={selectedPlan === plan.key ? 2 : 0}
              sx={{ my: 1, p: 2, mx: { md: 2 } }}
              onClick={() => handleSelectPlan(plan)}
            >
              <Typography sx={{ color: green[500] }}>{plan.title}</Typography>
              <Typography sx={{ color: grey[500], mb: 2 }}>
                {plan.price
                  ? moneyFormat(plan.price)
                  : 'Consulte nosso suporte'}
              </Typography>
              <Box>
                {plan.descriptions.map((description, i) => (
                  <Typography variant="body2" key={String(i)}>
                    {description}
                  </Typography>
                ))}
              </Box>
            </PlanPaper>
          ))}
        </PlansBox>
      </Box>
      <Navigator onBack={history.goBack} onNext={handleNext} />
    </>
  );
};
