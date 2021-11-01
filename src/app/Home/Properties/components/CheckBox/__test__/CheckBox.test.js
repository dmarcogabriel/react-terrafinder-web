import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import CheckBox from '..';

describe('<CheckBox />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should fire onchange event', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<CheckBox onChange={mockFn} />);

    const checkbox = getByTestId('checkbox');
    fireEvent.click(checkbox);

    expect(mockFn).toHaveBeenCalled();
  });

  it('should show checked icon', () => {
    const { getByTestId } = render(<CheckBox selected />);

    const checkedIcon = getByTestId('checkedIcon');

    expect(checkedIcon).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<CheckBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
