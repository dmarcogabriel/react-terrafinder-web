import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
import Filters from '..';

describe('common/components/Filters', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Filters />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should change background color', () => {
    const { getByTestId } = render(withTheme(<Filters className="bg-blue" />));

    const filters = getByTestId('filters');

    expect(filters.className).toContain('bg-blue');
  });

  it('should submit without values', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(withTheme(<Filters className="bg-blue" />));

    const submitButton = getByTestId('submitButton');
    fireEvent.click(submitButton);

    expect(mockFunction).not.toHaveBeenCalled();
  });

  it('should change property kind value', () => {
    const { getByTestId } = render(withTheme(<Filters />));

    const propertyKind = getByTestId('propertyKind');
    fireEvent.click(propertyKind);

    const option = getByTestId('option-farm');
    fireEvent.click(option);

    const value = getByTestId('propertyKindValue');
    expect(value).toHaveTextContent('Fazenda');
  });

  it('should change property size value', () => {
    const { getByTestId } = render(withTheme(<Filters onSubmit={jest.fn()} />));

    const propertySize = getByTestId('propertySize');
    fireEvent.click(propertySize);

    const minInput = getByTestId('minInput');
    const maxInput = getByTestId('maxInput');
    const okButton = getByTestId('okButton');

    fireEvent.change(minInput, { target: { value: '50' } });
    fireEvent.change(maxInput, { target: { value: '100' } });
    fireEvent.click(okButton);

    const value = getByTestId('propertySizeValue');
    expect(value).toHaveTextContent('50 até 100');
  });

  it('should change state value', () => {
    const { getByTestId } = render(withTheme(<Filters />));

    const state = getByTestId('state');
    fireEvent.click(state);

    const option = getByTestId('option-sp1');
    fireEvent.click(option);

    const value = getByTestId('stateValue');
    expect(value).toHaveTextContent('sp');
  });

  it('should change amount value', () => {
    const { getByTestId } = render(withTheme(<Filters />));

    const amount = getByTestId('amount');
    fireEvent.click(amount);

    const minInput = getByTestId('minInput');
    const maxInput = getByTestId('maxInput');
    const okButton = getByTestId('okButton');

    fireEvent.change(minInput, { target: { value: '10000' } });
    fireEvent.change(maxInput, { target: { value: '1000000' } });
    fireEvent.click(okButton);

    const value = getByTestId('amountValue');
    expect(value).toHaveTextContent('10000 até 1000000');
  });

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Filters />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
