import React from 'react';
import Property from 'common/components/Property';
import Button from 'common/components/Button';
import { MdAdd } from 'react-icons/md';
import classes from './MyAds.module.scss';
import sojaImg from './static/soja.jpg';

export default function MyAds() {
  const handleSelect = (id) => {
    // todo: open details
  };

  return (
    <div className={classes.myAds}>
      <h1>Meus anúncios</h1>

      <Button className={classes.createButton}>
        <MdAdd size={22} />

        <p>Criar Anúncio</p>
      </Button>

      <div className={classes.adsList}>
        {Array.from(Array(4)).map((_, i) => (
          <Property
            photo={sojaImg}
            key={String(i)}
            i={String(i)}
            property={{ name: 'Name' }}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
