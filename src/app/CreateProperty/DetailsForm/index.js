import React from 'react';
import Input from 'common/components/Input';
import TextArea from 'common/components/TextArea';
import Select from 'common/components/Select';
import classes from './DetailsForm.module.scss';

export default function DetailsForm() {
  return (
    <div className={classes.detailsForm}>
      <div className={classes.inlineInputs}>
        <Input label="Quanto quer pela propriedade?" type="number" />
        <Input label="Qual o tamanho da propriedade (em equitares)" />
      </div>

      <div className={classes.inlineInputs}>
        <div className={classes.col}>
          <Input label="Cultivo (plantações)" />
        </div>

        <div className={classes.col}>
          <Input label="Atividades e Destaques" />
        </div>
      </div>
    </div>
  );
}
