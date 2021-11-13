import React from 'react';
import { Box } from '@mui/material';
import Plan from './Plan';
import { PLANS } from './plans.object';
import {
  PlansTitle,
  PlansSubtitle,
  PlansContent,
  PlansDescriptionText,
} from './styles';

export const Plans = () => (
  <Box sx={{ py: 2, px: 2 }}>
    <PlansTitle sx={{ my: 2 }}>Conheça nossos planos de anúncio</PlansTitle>
    <PlansSubtitle sx={{ my: 2 }}>
      Escolha o que melhor se encaixa para você
    </PlansSubtitle>

    <PlansContent>
      {PLANS.map((plan, i) => (
        <Plan key={plan.id} plan={plan} i={i} />
      ))}
    </PlansContent>

    <Box
      sx={{
        px: { xs: 2, md: 10 },
        mt: 1,
        mb: 2,
      }}
    >
      <PlansDescriptionText sx={{ my: 2 }}>
        <b>Gratuito:</b> Recomendado para iniciantes, é uma ótima forma de
        testar a plataforma. Você pode testar a plataforma. Você pode criar um
        anúncio gratuíto da sua propriedade, com as informações gerais do
        imóvel, e dura 7 dias.
      </PlansDescriptionText>

      <PlansDescriptionText sx={{ my: 2 }}>
        <b>Premium:</b> Recomendado para quem já tem conteúdos da propriedade
        como fotos, detalhes do imóvel como tipo de solo, atividades,
        topografia. Ele custa R$ 50,00 e seu anúncio ganha mais visibilidade
        dentro da plataforma.
      </PlansDescriptionText>

      <PlansDescriptionText sx={{ my: 2 }}>
        <b>Profissional:</b> Entre em contato conosco para conversarmos e
        conhecermos melhor o seu imóvel rural. Iremos até a propriedade,
        colheremos as informações mais importanjtes dela e faremos excelentes
        gravações explorando o imóvel através de dones de ponta. Essa é a
        maneira mais fácil de vender.
      </PlansDescriptionText>
    </Box>
  </Box>
);
