import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, cleanup, waitFor } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import api from 'services/api';
import MyAds from '..';

jest.mock('hooks/useUser', () => ({
  useUser: () => ({
    currentUser: {
      _id: 'testId',
      firstName: 'John',
    },
  }),
}));

let pushResponse;
const mockFn = jest.fn((url) => {
  pushResponse = url;
});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockFn,
  }),
}));

const propertiesMock = [
  {
    _id: 'p1',
    photos: [],
    name: 'Property 1',
    amount: 9999.99,
    size: '99',
    farming: ['mock farm'],
    state: 'ZZ',
  },
  {
    _id: 'p2',
    photos: [],
    name: 'Property 2',
    amount: 9999.99,
    size: '99',
    farming: ['mock farm'],
    state: 'ZZ',
  },
];

const Comp = (props) => (
  <UserProvider>
    <MyAds {...props} />
  </UserProvider>
);

beforeEach(cleanup);

describe('<MyAds />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should load properties', async () => {
    jest.spyOn(api, 'get').mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          data: {
            properties: propertiesMock,
          },
        })
      )
    );

    const { getByTestId } = render(<Comp />);

    const propertyList = await waitFor(() => getByTestId('propertyList'));
    const firstProperty = await waitFor(() => getByTestId('property-0'));
    const lastProperty = await waitFor(() => getByTestId('property-1'));

    expect(propertyList.childElementCount).toEqual(2);
    expect(firstProperty).toBeInTheDocument();
    expect(lastProperty).toBeInTheDocument();
  });

  it('should go to create property page', async () => {
    const { getByTestId } = render(<Comp />);

    const createPropertyButton = await waitFor(() =>
      getByTestId('createProperty')
    );
    fireEvent.click(createPropertyButton);

    expect(mockFn).toHaveBeenCalled();
    expect(pushResponse).toEqual('/create/property?step=1');
  });

  it('should select property', async () => {
    jest.spyOn(api, 'get').mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          data: {
            properties: propertiesMock,
          },
        })
      )
    );

    const { getByTestId } = render(<Comp />);

    const property = await waitFor(() => getByTestId('property-1'));
    fireEvent.click(property);

    expect(mockFn).toHaveBeenCalled();
    expect(pushResponse).toEqual('property/p2');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
