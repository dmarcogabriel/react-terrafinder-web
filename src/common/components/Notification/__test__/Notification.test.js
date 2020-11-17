import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Notification from '..';

describe('<Notification />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notification />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Notification />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
