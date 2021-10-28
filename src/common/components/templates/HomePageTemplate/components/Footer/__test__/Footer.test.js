import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '..';

const Component = (props) => (
  <BrowserRouter>
    <Footer {...props} />
  </BrowserRouter>
);

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // todo: Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
