import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';
import { PlanHeader, PlanButton } from './styles';

export const Plan = ({ plan, i }) => {
  const isPremiumCard = () => i === 1;
  const history = useHistory();

  const handleNavigate = () => history.push(plan.link);

  return (
    <Card
      sx={{
        my: 2,
        width: { xs: '100%', md: '25%' },
        zIndex: isPremiumCard() ? 500 : 0,
      }}
    >
      <PlanHeader sx={{ color: plan.color, py: 5, px: 2 }}>
        <Typography variant="h3" component="p">
          {plan.amount}
        </Typography>
        <Typography sx={{ color: grey[900] }} variant="body2" component="p">
          {plan.plan}
        </Typography>
      </PlanHeader>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: plan.bgColor,
          color: grey[50],
          height: '100%',
        }}
      >
        <Typography variant="h5" component="p">
          {plan.kind}
        </Typography>
        <List sx={{ mx: 1 }}>
          {plan.features.map((feature) => (
            <ListItem key={feature.id} disablePadding>
              <ListItemIcon>
                {feature.included ? (
                  <CheckIcon sx={{ color: grey[50] }} />
                ) : (
                  <CloseIcon sx={{ color: grey[50] }} />
                )}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2" component="p">
                  {feature.name}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <PlanButton
          data-testid={`plan-button-${plan.id}`}
          sx={{ color: plan.color, my: 2 }}
          onClick={handleNavigate}
        >
          Quero esse
        </PlanButton>
      </CardContent>
    </Card>
  );
};
