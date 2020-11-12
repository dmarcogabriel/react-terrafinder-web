import React from 'react';
import {
  Switch,
  Route,
  useHistory,
  // useRouteMatch,
  useLocation,
} from 'react-router-dom';
import Button from 'common/components/Button';
import { parseSearch } from 'utils/parseSearch';
import classes from './CreateProperty.module.scss';
import GeneralForm from './GeneralForm';
import DetailsForm from './DetailsForm';
import UploadPhotos from './UploadPhotos';
import STEPS from './steps';

export default function CreateProperty() {
  const history = useHistory();
  // const { params } = useRouteMatch();
  const { search, pathname } = useLocation();
  const currentStep = parseSearch(search).step;

  const goBack = () => history.goBack();

  const handleNext = () => {
    if (pathname === '/create/property') {
      history.push('/create/property/details?step=2');
    } else if (pathname === '/create/property/details') {
      // todo: create property on API
      // todo: get property _id to upload photos

      history.push(
        `/create/property/upload-photos/5fad308039bb2a7ddab95e93?step=3`
      );
    }
  };

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

        <div className={classes.navigator}>
          <button className={classes.backButton} type="button" onClick={goBack}>
            Voltar
          </button>

          <Button onClick={handleNext} className={classes.nextButton}>
            Próximo
          </Button>
        </div>
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
