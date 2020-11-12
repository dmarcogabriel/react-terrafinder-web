import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { MdMap } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';
import classes from './Property.module.scss';

export default function Property({ photo, i, onSelect }) {
  return (
    <div
      role="button"
      tabIndex={i}
      onKeyDown={() => onSelect(i)}
      className={classes.propertyItem}
      onClick={() => onSelect(i)}
    >
      <img src={photo} alt="" />

      <div className={classes.content}>
        <p className={classes.name}>Fazenda de Soja - Três Lagoas</p>

        <p className={classes.amount}>R$ 1.000.000</p>

        <div className={classes.attributes}>
          <div className={classes.attribute}>
            <AiOutlineFullscreen size={22} className={classes.icon} />
            <p>100ha</p>
          </div>

          <div className={classes.attribute}>
            <RiPlantFill size={22} className={classes.icon} />
            <p>Soja/Milho</p>
          </div>

          <div className={classes.attribute}>
            <MdMap size={22} className={classes.icon} />
            <p>Mato Grosso</p>
          </div>
        </div>
      </div>
    </div>
  );
}
