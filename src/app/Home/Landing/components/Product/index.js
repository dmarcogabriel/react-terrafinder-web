import React from 'react';
import Button from 'common/components/Button';
import { MdArrowForward } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import classes from './Product.module.scss';

export default function Product({ image, product }) {
  const history = useHistory();

  const handleSelect = (link) => {
    history.push(link);
  };

  return (
    <div className={classes.container}>
      <div className={classes.product}>
        <img className={classes.image} src={image} alt="test" />

        <div className={classes.content}>
          <p className={classes.title}>{product.title}</p>

          <p className={classes.text}>{product.description}</p>
        </div>
      </div>

      <Button
        type="button"
        dataTestId="actionButton"
        className={classes.actionButton}
        onClick={() => handleSelect(product.link)}
      >
        <p className={classes.buttonText}>{product.buttonText}</p>
        <MdArrowForward />
      </Button>
    </div>
  );
}
