import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
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
    ReactDOM.render(withTheme(<Product {...mockProduct} />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should go to link', () => {
    const { getByTestId } = render(withTheme(<Product {...mockProduct} />));

    const actionButton = getByTestId('actionButton');
    fireEvent.click(actionButton);

    expect(mockFn).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Product {...mockProduct} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
