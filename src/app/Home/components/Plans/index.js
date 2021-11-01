import React from 'react';
import classes from './Plans.module.scss';
import Plan from './Plan';
import PLANS from './plans';

export default function Plans() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Conheça nosso planos de anúncio</h1>
      <h2 className={classes.subtitle}>
        Escolha o que melhor se encaixa para você
      </h2>

      <div className={classes.plans}>
        {PLANS.map((plan, i) => (
          <Plan key={plan.id} plan={plan} i={i} />
        ))}
      </div>

      <div className={classes.plansDescription}>
        <p>
          <b>Gratuito:</b> Recomendado para iniciantes, é uma ótima forma de
          testar a plataforma. Você pode testar a plataforma. Você pode criar um
          anúncio gratuíto da sua propriedade, com as informações gerais do
          imóvel, e dura 7 dias.
        </p>

        <p>
          <b>Premium:</b> Recomendado para quem já tem conteúdos da propriedade
          como fotos, detalhes do imóvel como tipo de solo, atividades,
          topografia. Ele custa R$ 50,00 e seu anúncio ganha mais visibilidade
          dentro da plataforma.
        </p>

        <p>
          <b>Proffissional:</b> Entre em contato conosco para conversarmos e
          conhecermos melhor o seu imóvel rural. Iremos até a propriedade,
          colheremos as informações mais importanjtes dela e faremos excelentes
          gravações explorando o imóvel através de dones de ponta. Essa é a
          maneira mais fácil de vender.
        </p>
      </div>
    </div>
  );
}
