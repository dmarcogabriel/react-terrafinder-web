import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Property from '..';

const mockProperty = {
  property: { _id: 'test', name: 'Test' },
  index: 0,
  photo: '',
};

describe('<Property />', () => {
  it('renders without crashing', () => {
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
