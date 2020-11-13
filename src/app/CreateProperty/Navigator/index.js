import React from 'react';
import Button from 'common/components/Button';
import classes from './Navigator.module.scss';

export default function Navigator({
  onBack,
  onNext,
  nextButtonText = 'Próximo',
}) {
  return (
    <div className={classes.navigator}>
      <button className={classes.backButton} type="button" onClick={onBack}>
        Voltar
      </button>

      <Button onClick={onNext} className={classes.nextButton}>
        {nextButtonText}
      </Button>
    </div>
  );
}
