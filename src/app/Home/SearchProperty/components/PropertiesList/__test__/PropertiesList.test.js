import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertiesList from '..';

const Component = (props) => (
  <BrowserRouter>
    <PropertiesList {...props} />
  </BrowserRouter>
);

describe('<PropertiesList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
