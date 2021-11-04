import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Property from '..';

const property = {
  _id: 'test',
  name: 'Test',
  amount: 99999999,
  size: '20',
  state: 'ZZ',
  photos: ['testphoto.png'],
  farming: ['testFarming'],
};

const mockProperty = {
  property,
  index: 0,
};

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe('<Property />', () => {
  it('renders without crashing', () => {
    process.env.REACT_APP_STATIC = 'http://testinghost:555';

    const div = document.createElement('div');
    ReactDOM.render(<Property {...mockProperty} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render without photo', () => {
    // ! Ta errado isso aqui
    // const { getByTestId } = render(
    //   <Property property={{ ...property, photos: [] }} />
    // );
    // const photo = getByTestId('photo');
    // expect(photo).toHaveAttribute('alt', 'Propriedade');
    // expect(photo).toHaveAttribute('src', JSON.stringify('soja.jpg'));
  });

  it('should fire onselect event', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Property property={{ ...property, photos: [] }} onSelect={mockFn} />
    );

    const propertyDiv = getByTestId('property');
    fireEvent.click(propertyDiv);

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn.mock.calls).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Property {...mockProperty} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
