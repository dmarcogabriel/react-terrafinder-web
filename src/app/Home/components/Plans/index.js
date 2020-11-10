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
    </div>
  );
}
