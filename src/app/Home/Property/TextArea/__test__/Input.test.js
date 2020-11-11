import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Input from '..';

describe('<Input />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
