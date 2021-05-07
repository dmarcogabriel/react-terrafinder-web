import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { withTheme, renderWithTheme } from 'helpers/test-helpers/theme';
import SearchProperty from '..';

const history = createMemoryHistory();

const Comp = (props) => (
  <Router history={history}>
    <SearchProperty {...props} />
  </Router>
);

describe('<SearchProperty />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Comp />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
