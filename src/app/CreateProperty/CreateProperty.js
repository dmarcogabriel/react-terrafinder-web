import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import {
  CreatePropertyProgress,
  ChosePlan,
  BasicInfoForm,
  DetailsForm,
  UploadPhotos,
  Review,
} from './components';
import { NewPropertyProvider } from './NewPropertyContext';

export const CreateProperty = () => {
  const { path } = useRouteMatch();

  return (
    <NewPropertyProvider>
      <CreatePropertyProgress currentStep={1}>
        <Router>
          <Switch>
            <Route exact path={path}>
              <ChosePlan />
            </Route>
            <Route path={`${path}/basic-info`}>
              <BasicInfoForm />
            </Route>
            <Route path={`${path}/details`}>
              <DetailsForm />
            </Route>
            <Route path={`${path}/upload-photos`}>
              <UploadPhotos />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
          </Switch>
        </Router>
      </CreatePropertyProgress>
    </NewPropertyProvider>
  );
};
