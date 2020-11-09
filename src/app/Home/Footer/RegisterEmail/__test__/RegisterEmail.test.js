import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import RegisterEmail from '..';

describe('<RegisterEmail />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterEmail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // todo: add api mock call
  // it('should send email correctly', () => {
  //   const { getByTestId } = render(<RegisterEmail />);

  //   const registerEmail = getByTestId('registerEmail');

  //   fireEvent.change(getByTestId('emailInput'), {
  //     target: { value: 'email@test.com.br' },
  //   });

  //
  // });

  it('matches snapshot', () => {
    const tree = renderer.create(<RegisterEmail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
