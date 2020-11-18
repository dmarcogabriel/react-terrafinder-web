import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationProvider } from 'contexts/Notification';
import { UserProvider } from 'contexts/User';
import UploadPhotos from '..';

const Comp = (props) => (
  <NotificationProvider>
    <UserProvider>
      <Router>
        <UploadPhotos {...props} />
      </Router>
    </UserProvider>
  </NotificationProvider>
);

describe('<UploadPhotos />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
