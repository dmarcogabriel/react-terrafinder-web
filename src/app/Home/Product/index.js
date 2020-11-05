import React from 'react';
import Button from 'common/Button';
import { MdArrowForward } from 'react-icons/md';
import classes from './Product.module.scss';

export default function Product({ image }) {
  return (
    <div className={classes.container}>
      <div className={classes.product}>
        <img className={classes.image} src={image} alt="test" />

        <div className={classes.content}>
          <p className={classes.title}>Anunciar imóvel rural</p>

          <p className={classes.text}>
            Quero criar um anúncio para vender minha fazenda, chácara ou sítio.
          </p>
        </div>
      </div>

      <Button type="button" className={classes.actionButton}>
        <p className={classes.buttonText}>Anunciar</p>
        <MdArrowForward />
      </Button>
    </div>
  );
}
