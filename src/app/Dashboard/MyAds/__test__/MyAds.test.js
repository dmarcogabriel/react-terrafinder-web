import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import MyAds from '..';

describe('<MyAds />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyAds />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<MyAds />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
