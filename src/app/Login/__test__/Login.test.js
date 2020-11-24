import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'contexts/User';
import Login from '..';

const Comp = () => (
  <UserProvider>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </UserProvider>
);

describe('<Login />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should replace page', () => {
    jest.doMock('hooks/useUser', () => ({
      useUser() {
        return { currentUser: true };
      },
    }));

    render(<Comp />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
