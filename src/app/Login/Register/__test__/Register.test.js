import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from 'contexts/Notification';
import Notification from 'common/components/Notification';
import Register from '..';

const Comp = () => (
  <NotificationProvider>
    <Notification />

    <BrowserRouter>
      <Register />
    </BrowserRouter>
  </NotificationProvider>
);

describe('<Register />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should submig user', () => {
    jest.doMock('services/api', () => ({
      post: async () => Promise.resolve({ message: 'Success!' }),
    }));

    const { getByTestId } = render(<Comp />);

    const firstNameInput = getByTestId('firstNameInput');
    const lastNameInput = getByTestId('lastNameInput');
    const emailInput = getByTestId('emailInput');
    const phoneInput = getByTestId('phoneInput');
    const cpfInput = getByTestId('cpfInput');
    const passInput = getByTestId('passInput');
    const registerButton = getByTestId('registerButton');

    fireEvent.change(firstNameInput, { target: { value: 'Tester' } });
    fireEvent.change(lastNameInput, { target: { value: 'Da Silva' } });
    fireEvent.change(emailInput, { target: { value: 'tester@test.com' } });
    fireEvent.change(phoneInput, { target: { value: '14999998888' } });
    fireEvent.change(cpfInput, { target: { value: '11122233344' } });
    fireEvent.change(passInput, { target: { value: 'aaaaaa' } });

    fireEvent.click(registerButton);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
