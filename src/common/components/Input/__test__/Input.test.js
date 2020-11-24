import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Input from '..';

describe('<Input />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show error message', () => {
    const { getByTestId } = render(<Input errorMessage="testing error" />);

    const error = getByTestId('error');

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('testing error');
  });

  it('should change text value', () => {
    const { getByTestId } = render(<Input onChange={() => {}} />);

    const input = getByTestId('input');
    fireEvent.change(input, { target: { value: 'testing' } });

    expect(input).toHaveValue('testing');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
