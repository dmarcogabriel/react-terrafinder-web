import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Typography, Box } from '@mui/material';
import { Announcement as AdIcon } from '@mui/icons-material';
import { moneyFormat } from 'utils/formatters';
import { green, grey } from '@mui/material/colors';
import api from 'services/api';
import { useUser } from 'hooks/useUser';
import Navigator from '../Navigator';
import { PLANS } from './plans.obj';
import { CreatePropertyContainer } from '../components';
import { PlansBox, PlanPaper } from './styles';

export const ChosePlan = () => {
  const history = useHistory();
  const [selectedPlan, setSelectedPlan] = useState('free-plan');
  const { currentUser, setUserPlan } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = () => {
    history.push('/create-property/general?step=2', { plan: selectedPlan });
  };

  const handleSelectPlan = (plan) => setSelectedPlan(plan.key);

  const loadUserPlan = useCallback(async () => {
    try {
      const { data: res } = await api.get(`/plans/${currentUser._id}`);
      if (res.data && res.data.plan) {
        setUserPlan(res.data.plan);
        history.replace('create-property/general?step=2', {
          plan: res.data.plan,
        });
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUserPlan();
  }, [loadUserPlan]);

  return (
    <CreatePropertyContainer>
      {!isLoading && (
        <Card
          sx={{
            p: 3,
            mx: { xs: 2, md: 0 },
            my: { xs: 2, md: 0 },
            width: { md: '100%' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AdIcon fontSize="large" color="success" />
            <Typography sx={{ my: 3 }} variant="h5" component="h1">
              Escolha seu plano de anúncio
            </Typography>
            <PlansBox>
              {PLANS.map((plan) => (
                <PlanPaper
                  key={plan.key}
                  selected={selectedPlan === plan.key}
                  elevation={selectedPlan === plan.key ? 2 : 0}
                  sx={{ my: 1, p: 2, mx: { md: 2 } }}
                  onClick={() => handleSelectPlan(plan)}
                >
                  <Typography variant="h6" sx={{ color: green[500] }}>
                    {plan.title}
                  </Typography>
                  <Typography sx={{ color: grey[500], mb: 2 }}>
                    {plan.price
                      ? moneyFormat(plan.price)
                      : 'Consulte nosso suporte'}
                  </Typography>
                  <Box>
                    {plan.descriptions.map((description, i) => (
                      <Typography key={String(i)}>{description}</Typography>
                    ))}
                  </Box>
                </PlanPaper>
              ))}
            </PlansBox>
          </Box>
          <Navigator onBack={history.goBack} onNext={handleNext} />
        </Card>
      )}
    </CreatePropertyContainer>
  );
};
