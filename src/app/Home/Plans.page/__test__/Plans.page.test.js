import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { PlansPage } from '../Plans.page';

const Comp = (props) => (
  <BrowserRouter>
    <PlansPage {...props} />
  </BrowserRouter>
);

let mockUser;
const mockLogout = jest.fn();

jest.mock('hooks/useUser', () => ({
  useUser: () => ({
    currentUser: mockUser,
    userIsLogged: jest.fn(() => !!mockUser),
    logout: mockLogout,
  }),
}));

jest.mock('hooks/useNotification', () => ({
  useNotification: () => ({
    showNotification() {},
  }),
  NOTIFICATION_TYPES: { SUCCESS: 'success', ERROR: 'error' },
}));

describe('app/Home/Plans.page', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
