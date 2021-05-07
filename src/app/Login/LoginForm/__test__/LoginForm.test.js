import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { withTheme, renderWithTheme } from 'helpers/test-helpers/theme';
import LoginForm from '..';

const Component = () => (
  <BrowserRouter>
    <LoginForm />
  </BrowserRouter>
);

jest.mock('hooks/useUser', () => ({
  useUser: () => ({ login: jest.fn() }),
}));

describe('<LoginForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Component />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
