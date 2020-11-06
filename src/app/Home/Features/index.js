import React from 'react';
import Button from 'common/Button';
import { MdArrowForward } from 'react-icons/md';
import cn from 'classnames';
import {
  backgroundImage,
  container,
  title,
  content,
  column,
  subtitle,
  text,
  actionButtons,
  actionButton,
  cards,
  card,
  cardTitle,
  cardText,
} from './Features.module.scss';
import FeaturesBackground from './featuresBackground.png';

const CARDS = Array.from(Array(3));

export default function Features() {
  return (
    <div className={container}>
      <div
        className={backgroundImage}
        style={{ backgroundImage: `url(${FeaturesBackground})` }}
      />
      <h1 className={title}>Funcionalidades e Benefícios do Terrafinder</h1>

      <div className={content}>
        <div className={column}>
          <h2 className={subtitle}>
            Conheça e aprenda a utilizar o Terrafinder
          </h2>

          <p className={text}>
            Você que quer vender seu imóvel rural, encontrou o lugar ideal para
            anuncia-lo. É simples, rápido e eficiente.
          </p>

          <p className={text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt quisquam accusantium accusamus aliquid laborum nam quasi
            earum quaerat voluptate ratione cumque tempora minima, nihil sequi.
            Culpa, ut ad? At?
          </p>

          <div className={actionButtons}>
            <Button className={actionButton}>
              <p>Quero anunciar meu imóvel</p>

              <MdArrowForward />
            </Button>

            <Button className={cn('bg-green', actionButton)}>
              <p>Quero achar uma propriedade</p>
              <MdArrowForward />
            </Button>
          </div>
        </div>

        <div className={column}>
          {CARDS.map((_, i) => (
            <div className={cards} key={String(i)}>
              <div className={card}>
                <p className={cardTitle}>
                  Pague apenas pelo tempo do seu anúncio
                </p>

                <p className={cardText}>
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
