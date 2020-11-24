import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Select from '..';

const mockOptions = [
  {
    key: 'o1',
    selected: false,
    name: 'option 1',
  },
  {
    key: 'o2',
    selected: true,
    name: 'option 2',
  },
];

describe('<Select />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show options', () => {
    const { getByTestId } = render(<Select options={mockOptions} />);

    const select = getByTestId('select');
    fireEvent.click(select);

    const arrowDropUp = getByTestId('arrowDropUp');
    const options = getByTestId('options');

    expect(arrowDropUp).toBeInTheDocument();
    expect(options).toBeInTheDocument();
  });

  it('should fire change', () => {
    const { getByTestId } = render(
      <Select options={mockOptions} onChange={() => {}} />
    );

    const select = getByTestId('select');
    fireEvent.click(select);

    const option = getByTestId('option-o1');
    fireEvent.click(option);

    const value = getByTestId('value');
    expect(value).toHaveTextContent('option 1');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Select />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
