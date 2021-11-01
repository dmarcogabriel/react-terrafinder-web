import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { ForgotPassword } from '..';

jest.mock('hooks/useUser', () => ({
  useUser: jest.fn(() => ({
    currentUser: null,
  })),
}));

describe('<ForgotPassword />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ForgotPassword />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
