import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Property from '..';

const property = {
  _id: 'test',
  name: 'Test',
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

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Property {...mockProperty} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
