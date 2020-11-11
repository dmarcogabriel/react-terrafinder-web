import React from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { MdMap } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import classes from './PropertiesList.module.scss';
import propertyImg from './static/soja.jpg';

export default function PropertiesList() {
  const { push } = useHistory();

  const selectProperty = (id) => {
    push(`/home/property/${id}`);
  };

  return (
    <div className={classes.properties}>
      {Array.from(Array(4)).map((_, i) => (
        <div
          role="button"
          tabIndex={i}
          onKeyDown={() => selectProperty(String(i))}
          key={String(i)}
          className={classes.propertyItem}
          onClick={() => selectProperty(String(i))}
        >
          <img src={propertyImg} alt="" />

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
      ))}
    </div>
  );
}
