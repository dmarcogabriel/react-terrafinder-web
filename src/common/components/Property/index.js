import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { MdMap } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';
import { moneyFormat } from 'utils/formatters';
import classes from './Property.module.scss';

export default function Property({ property, index, onSelect }) {
  const [photo] = property.photos;

  return (
    <div
      role="button"
      tabIndex={index}
      onKeyDown={() => onSelect(property._id)}
      className={classes.propertyItem}
      onClick={() => onSelect(property._id)}
    >
      <img src={`http://localhost:8000/images/${photo}`} alt={photo} />

      <div className={classes.content}>
        <p className={classes.name}>{property.name}</p>

        <p className={classes.amount}>{moneyFormat(property.amount, false)}</p>

        <div className={classes.attributes}>
          <div className={classes.attribute}>
            <AiOutlineFullscreen size={22} className={classes.icon} />
            <p>{property.size}ha</p>
          </div>

          <div className={classes.attribute}>
            <RiPlantFill size={22} className={classes.icon} />
            <p>{property.farming[0]}</p>
          </div>

          <div className={classes.attribute}>
            <MdMap size={22} className={classes.icon} />
            <p>{property.state}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
