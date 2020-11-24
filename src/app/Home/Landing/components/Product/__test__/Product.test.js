import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Product from '..';

const mockFn = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockFn,
  }),
}));

const mockProduct = {
  image: '',
  product: {
    title: 'test',
    description: 'This is a test',
    buttonText: 'Go to test',
    link: '/test',
  },
};

describe('<Property />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Product {...mockProduct} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should go to link', () => {
    const { getByTestId } = render(<Product {...mockProduct} />);

    const actionButton = getByTestId('actionButton');
    fireEvent.click(actionButton);

    expect(mockFn).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Product {...mockProduct} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
