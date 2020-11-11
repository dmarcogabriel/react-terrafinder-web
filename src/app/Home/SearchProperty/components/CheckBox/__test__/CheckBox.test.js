import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import CheckBox from '..';

describe('<CheckBox />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<CheckBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
