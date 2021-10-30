import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { RegisterEmail } from '..';

jest.mock('hooks/useNotification', () => ({
  useNotification: () => ({
    showNotification() {},
  }),
  NOTIFICATION_TYPES: { SUCCESS: 'success', ERROR: 'error' },
}));

describe('<RegisterEmail />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterEmail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should send email correctly', () => {
    const { getByTestId } = render(<RegisterEmail />);

    const registerEmail = getByTestId('registerEmail');
    const emailInput = getByTestId('emailInput');

    fireEvent.change(emailInput, {
      target: { value: 'email@test.com.br' },
    });
    fireEvent.click(registerEmail);

    expect(emailInput).toHaveValue('email@test.com.br');
  });

  it('should show error on invalid', async () => {
    const { getByTestId, rerender } = render(<RegisterEmail />);

    const emailInput = getByTestId('emailInput');
    const submitBtn = getByTestId('registerEmail');

    fireEvent.change(emailInput, {
      target: { value: 't' },
    });
    fireEvent.click(submitBtn);

    await waitFor(() => rerender(<RegisterEmail />));

    expect(emailInput).toHaveValue('t');
    expect(emailInput.parentElement).toHaveClass('Mui-error');
    expect(submitBtn).toHaveClass('Mui-disabled');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<RegisterEmail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
