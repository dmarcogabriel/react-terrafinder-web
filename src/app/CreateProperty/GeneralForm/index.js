import React from 'react';
import Input from 'common/components/Input';
import TextArea from 'common/components/TextArea';
import Select from 'common/components/Select';
import classes from './GeneralForm.module.scss';

export default function GeneralForm() {
  return (
    <div className={classes.generalForm}>
      <div className={classes.inlineInputs}>
        <Input label="Nome da Propriedade" />
        <Input label="Nome do Proprietário" />
      </div>

      <TextArea label="Descrição" />
      <Select label="Tipo de Imóvel" />

      <div className={classes.inlineInputs}>
        <Input label="Estado (em que o imóvel se encontra)" />
        <Input label="Cidade Mais Próxima ao imóvel" />
      </div>

      <Input label="CEP da Propriedade" />
    </div>
  );
}
