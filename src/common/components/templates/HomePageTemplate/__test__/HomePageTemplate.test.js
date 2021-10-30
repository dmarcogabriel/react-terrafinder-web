import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { mockUseNotification } from 'helpers/test-helpers/notification';
import { HomePageTemplate } from '../HomePageTemplate';

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
    showNotification: () => {},
  }),
  NOTIFICATION_TYPES: { SUCCESS: 'success', ERROR: 'error' },
}));

const Comp = ({ ...props }) => (
  <BrowserRouter>
    <HomePageTemplate {...props} />
  </BrowserRouter>
);

describe('common/components/templates/HomePageTemplate', () => {
  it('should render correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
