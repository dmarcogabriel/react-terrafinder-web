import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
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
  const history = useHistory();

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
              <Review history={history} />
            </Route>
          </Switch>
        </Router>
      </CreatePropertyProgress>
    </NewPropertyProvider>
  );
};
