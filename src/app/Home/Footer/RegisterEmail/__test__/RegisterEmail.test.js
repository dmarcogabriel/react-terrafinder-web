import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import RegisterEmail from '..';

describe('<RegisterEmail />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegisterEmail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<RegisterEmail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
