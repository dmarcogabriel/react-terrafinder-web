import React, { useState } from 'react';
import Select from 'common/Select';
import Button from 'common/Button';
import classes from './SearchProperties.module.scss';

import FARM_KINDS from './farmKinds';

export default function SearchProperties() {
  const [propertyKind, setPropertyKind] = useState();

  return (
    <div className={classes.container}>
      <Select
        id="propertyKind"
        label="Tipo de Propriedade"
        options={FARM_KINDS}
        value={propertyKind}
        onChange={setPropertyKind}
      />
      <Select label="Área do Imóvel" options={FARM_KINDS} />
      <Select label="Estado" options={FARM_KINDS} />
      <Select label="Intervalo de Preço" options={FARM_KINDS} />

      <Button className={classes.searchButton}>Procurar Imóvel</Button>
    </div>
  );
}
