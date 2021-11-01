import React from 'react';
// import Button from 'common/components/atm/Button';
// import { MdArrowForward } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Box, Card, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import classes from './Features.module.scss';
import { CARDS_CONTENT } from './cardsContent.object';

export default function Features() {
  const history = useHistory();

  const handleCreateProperty = () => history.push('/create/property?step=1');
  const handleFindProperty = () => history.push('home/search-property');

  return (
    <div className={classes.container}>
      <div className={classes.backgroundImage} />

      <h1 className={classes.title}>
        Funcionalidades e Benefícios do Terrafinder
      </h1>

      <div className={classes.content}>
        <div className={classes.column}>
          <h2 className={classes.subtitle}>
            Conheça e aprenda a utilizar o Terrafinder
          </h2>

          <p className={classes.text}>
            Você que quer vender seu imóvel rural, encontrou o lugar ideal para
            anuncia-lo. É simples, rápido e eficiente.
          </p>

          <p className={classes.text}>
            Ou caso tenha interesse em comprar algum imóvel rural em determinado
            lugar, você achou o lugar correto! Escolha uma das opções abaixo
            para entender e aprender a criar ou procurar sua propriedade rural.
          </p>

          <div className={classes.actionButtons}>
            <Button
              data-testid="createProperty"
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
              onClick={handleCreateProperty}
            >
              Quero anunciar meu imóvel
            </Button>
            <Button
              data-testid="findProperty"
              variant="contained"
              color="success"
              endIcon={<ArrowForward />}
              onClick={handleFindProperty}
            >
              Quero achar uma propriedade
            </Button>
          </div>
        </div>

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
                m: 1,
                p: 1,
                background: card.colors.bg,
                color: card.colors.text,
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
                <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                  {card.title}
                </Typography>
              </Box>
              <Typography variant="body2">{card.text}</Typography>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}
