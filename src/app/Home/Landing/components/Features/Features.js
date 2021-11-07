import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Card, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { CARDS_CONTENT } from './cardsContent.object';
import { FEATURES } from './features.string';
import {
  FeaturesContainer,
  FeaturesBackgroundImage,
  FeaturesBoxFlex,
  FeaturesTitle,
  FeaturesSubtitle,
} from './styles';

export const Features = () => {
  const history = useHistory();

  const handleCreateProperty = () => history.push('/create-property?step=1');
  const handleFindProperty = () => history.push('/search-property');

  return (
    <FeaturesContainer sx={{ py: 4 }}>
      <FeaturesBackgroundImage />

      <FeaturesTitle>{FEATURES.title}</FeaturesTitle>

      <FeaturesBoxFlex sx={{ mx: { xs: 2, md: 5 }, my: 2 }}>
        <Box sx={{ ml: 2, mr: 2 }}>
          <FeaturesSubtitle sx={{ my: 3 }}>
            {FEATURES.subtitle}
          </FeaturesSubtitle>
          {FEATURES.descriptions.map((description, i) => (
            <Typography key={String(i)} sx={{ my: 3 }}>
              {description}
            </Typography>
          ))}
          <FeaturesBoxFlex sx={{ alignItems: 'center', my: { xs: 3, md: 0 } }}>
            <Button
              sx={{ mr: { xs: 0, md: 1 }, my: { xs: 1 } }}
              data-testid="createProperty"
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
              onClick={handleCreateProperty}
            >
              {FEATURES.buttons.create}
            </Button>
            <Button
              sx={{ ml: { xs: 0, md: 1 }, my: { xs: 1 } }}
              data-testid="findProperty"
              variant="contained"
              color="success"
              endIcon={<ArrowForward />}
              onClick={handleFindProperty}
            >
              {FEATURES.buttons.find}
            </Button>
          </FeaturesBoxFlex>
        </Box>

        <Box
          sx={{
            px: { xs: 3 },
            display: { md: 'grid' },
            gridTemplateColumns: { md: 'repeat(2, 1fr)' },
          }}
        >
          {CARDS_CONTENT.map((card) => (
            <Card
              key={card.key}
              sx={{
                m: { xs: 2, md: 1 },
                p: 2,
                background: card.colors.bg,
                color: card.colors.text,
                minHeight: '150px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <card.IconComponent sx={{ mr: 2, color: card.colors.icon }} />
                <Typography
                  sx={{ fontWeight: 'bold', lineHeight: '28px' }}
                  variant="body1"
                >
                  {card.title}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: '28px' }}>
                {card.text}
              </Typography>
            </Card>
          ))}
        </Box>
      </FeaturesBoxFlex>
    </FeaturesContainer>
  );
};
