import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
import { Product } from '..';

const mockFn = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockFn,
  }),
}));

const mockProduct = {
  title: 'test',
  image: 'image-test',
  description: 'This is a test',
  buttonText: 'Go to test',
  link: '/test',
};

describe('app/Home/Landing/components/Product', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Product product={mockProduct} />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should go to link', () => {
    const { getByTestId } = render(
      withTheme(<Product product={mockProduct} />)
    );

    const actionButton = getByTestId('actionButton');
    fireEvent.click(actionButton);

    expect(mockFn).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Product product={mockProduct} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
