import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import RangeInput from '..';

describe('<RangeInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RangeInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should change value', () => {
    const { getByTestId } = render(<RangeInput onChange={() => {}} />);

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
    const { getByTestId } = render(<RangeInput />);

    const rangeInput = getByTestId('rangeInput');
    const value = getByTestId('value');
    fireEvent.click(rangeInput);

    const cancelButton = getByTestId('cancelButton');
    fireEvent.click(cancelButton);

    expect(value).toHaveTextContent('0 até 1');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<RangeInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
