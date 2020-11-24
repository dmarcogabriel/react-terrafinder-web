import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import Features from '..';

let pushResponse;
const mockPush = jest.fn((url) => {
  pushResponse = url;
});
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

describe('<Property />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Features />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should to to create property page', () => {
    const { getByTestId } = render(<Features />);

    const createPropertyButton = getByTestId('createProperty');
    fireEvent.click(createPropertyButton);

    expect(mockPush).toHaveBeenCalled();
    expect(pushResponse).toEqual('/create/property?step=1');
  });

  it('should to to property list page', () => {
    const { getByTestId } = render(<Features />);

    const findPropertyButton = getByTestId('findProperty');
    fireEvent.click(findPropertyButton);

    expect(mockPush).toHaveBeenCalled();
    expect(pushResponse).toEqual('home/search-property');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Features />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
