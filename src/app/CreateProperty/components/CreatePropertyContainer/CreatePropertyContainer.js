import React from 'react';
import { useLocation } from 'react-router-dom';
import { parseSearch } from 'utils/parseSearch';
import classes from './CreateProperty.module.scss';
import { STEPS } from '../../steps.obj';

export const CreatePropertyContainer = ({ children }) => {
  const { search } = useLocation();
  const currentStep = parseSearch(search).step;

  return (
    <div className={classes.createProperty}>
      <div className={classes.form}>
        {/* <h1>Anúncio de Imóvel Rural</h1> */}
        {children}
      </div>

      <div className={classes.progress}>
        <div className={classes.progressContainer}>
          {STEPS.map((step) => (
            <div key={step.id} className={classes.progressItem}>
              <p
                className={
                  currentStep === step.number
                    ? classes.activeProgressNumber
                    : classes.inactiveProgressNumber
                }
              >
                {step.number}
              </p>

              <div
                className={
                  currentStep === step.number
                    ? classes.activeProgressItem
                    : classes.inactiveProgressItem
                }
              >
                <p className={classes.title}>{step.title}</p>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
