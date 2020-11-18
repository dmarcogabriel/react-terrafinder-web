import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CreateProperty from '..';

const history = createMemoryHistory();

const Comp = (props) => (
  <UserProvider>
    <Router history={history}>
      <CreateProperty {...props} />
    </Router>
  </UserProvider>
);

describe('<CreateProperty />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
