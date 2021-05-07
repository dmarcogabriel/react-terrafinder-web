import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { withTheme, renderWithTheme } from 'helpers/test-helpers/theme';
import RangeInput from '..';

describe('<RangeInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<RangeInput />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should change value', () => {
    const { getByTestId } = render(
      withTheme(<RangeInput onChange={() => {}} />)
    );

    const rangeInput = getByTestId('rangeInput');
    const value = getByTestId('value');
    fireEvent.click(rangeInput);

    const minInput = getByTestId('minInput');
    const maxInput = getByTestId('maxInput');
    const okButton = getByTestId('okButton');

    fireEvent.change(minInput, { target: { value: '50' } });
    fireEvent.change(maxInput, { target: { value: '100' } });
    fireEvent.click(okButton);

    expect(value).toHaveTextContent('50 até 100');
  });

  it('should fires cancel event', () => {
    const { getByTestId } = render(withTheme(<RangeInput />));

    const rangeInput = getByTestId('rangeInput');
    const value = getByTestId('value');
    fireEvent.click(rangeInput);

    const cancelButton = getByTestId('cancelButton');
    fireEvent.click(cancelButton);

    expect(value).toHaveTextContent('0 até 1');
  });

  it('matches snapshot', () => {
    const tree = renderWithTheme(<RangeInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
