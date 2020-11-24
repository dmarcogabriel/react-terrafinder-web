import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import RegisterEmail from '..';

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

  it('matches snapshot', () => {
    const tree = renderer.create(<RegisterEmail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
