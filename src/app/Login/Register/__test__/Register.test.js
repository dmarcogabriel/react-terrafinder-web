import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { NotificationProvider } from 'contexts/Notification';
import Notification from 'common/components/Notification';
import api from 'services/api';
import { withTheme, renderWithTheme } from 'helpers/test-helpers/theme';
import Register from '..';

let pushResponse;
const mockPush = jest.fn((url) => {
  pushResponse = url;
});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

const Comp = () => (
  <NotificationProvider>
    <Notification />

    <Register />
  </NotificationProvider>
);

describe('<Register />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Comp />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be able to submit', async () => {
    const apiSpy = jest.spyOn(api, 'post').mockImplementationOnce(
      jest.fn(() =>
        Promise.resolve({
          data: {
            message: 'Success',
          },
        })
      )
    );

    const { getByTestId } = render(withTheme(<Comp />));

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

    await waitFor(() => fireEvent.click(registerButton));

    expect(apiSpy).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalled();
    expect(pushResponse).toEqual('/login');
  });

  it('should fail to submit', async () => {
    const apiSpy = jest
      .spyOn(api, 'post')
      .mockImplementationOnce(jest.fn(() => Promise.reject()));

    const { getByTestId } = render(withTheme(<Comp />));

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

    await waitFor(() => fireEvent.click(registerButton));

    expect(apiSpy).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
