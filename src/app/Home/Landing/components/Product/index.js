import React from 'react';
import { Button } from 'common/components';
import { MdArrowForward } from 'react-icons/md';
import classes from './Product.module.scss';

export default function Product({ image, product }) {
  return (
    <div className={classes.container}>
      <div className={classes.product}>
        <img className={classes.image} src={image} alt="test" />

        <div className={classes.content}>
          <p className={classes.title}>{product.title}</p>

          <p className={classes.text}>{product.description}</p>
        </div>
      </div>

      <Button type="button" className={classes.actionButton}>
        <p className={classes.buttonText}>{product.buttonText}</p>
        <MdArrowForward />
      </Button>
    </div>
  );
}
