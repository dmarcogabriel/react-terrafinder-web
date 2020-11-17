import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { parseSearch } from 'utils/parseSearch';
import { useNotification } from 'hooks/useNotification';
import classes from './CreateProperty.module.scss';
import GeneralForm from './GeneralForm';
import DetailsForm from './DetailsForm';
import UploadPhotos from './UploadPhotos';
import STEPS from './steps';

export default function CreateProperty() {
  const { search } = useLocation();
  const currentStep = parseSearch(search).step;
  const { showNotification } = useNotification();

  React.useEffect(() => {
    setTimeout(() => {
      showNotification('Notification created');
    }, 3000);
  }, []);

  return (
    <div className={classes.createProperty}>
      <div className={classes.form}>
        <h1>Anúncio de Imóvel Rural</h1>

        <Switch>
          <Route exact path="/create/property">
            <GeneralForm />
          </Route>

          <Route path="/create/property/details">
            <DetailsForm />
          </Route>

          <Route path="/create/property/upload-photos/:id">
            <UploadPhotos />
          </Route>
        </Switch>
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
}
