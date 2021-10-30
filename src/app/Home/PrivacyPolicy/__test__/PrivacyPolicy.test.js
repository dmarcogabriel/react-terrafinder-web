import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { PrivacyPolicy } from '..';

const Comp = (props) => <Router>{/* <PrivacyPolicy {...props} /> */}</Router>;

describe('<PrivacyPolicy />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Comp />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    // const tree = renderer.create(<Comp />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
