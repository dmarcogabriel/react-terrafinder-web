import React from 'react';
import Button from 'common/components/Button';
import { MdArrowForward } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import classes from './Features.module.scss';

const CARDS = Array.from(Array(3));

export default function Features() {
  const history = useHistory();

  const handleCreateProperty = () => history.push('/create/property');
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt quisquam accusantium accusamus aliquid laborum nam quasi
            earum quaerat voluptate ratione cumque tempora minima, nihil sequi.
            Culpa, ut ad? At?
          </p>

          <div className={classes.actionButtons}>
            <Button
              className={classes.actionButton}
              onClick={handleCreateProperty}
            >
              <p>Quero anunciar meu imóvel</p>

              <MdArrowForward />
            </Button>

            <Button
              className={classes.greenActionButton}
              onClick={handleFindProperty}
            >
              <p>Quero achar uma propriedade</p>
              <MdArrowForward />
            </Button>
          </div>
        </div>

        <div className={classes.column}>
          {CARDS.map((_, i) => (
            <div className={classes.cards} key={String(i)}>
              <div className={classes.card}>
                <p className={classes.cardTitle}>
                  Pague apenas pelo tempo do seu anúncio
                </p>

                <p className={classes.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  eius eum praesentium quos delectus vero commodi ipsum
                  molestiae quod vel nostrum rerum alias minima explicabo
                  dignissimos, iste tempora nulla perferendis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
