import React from 'react';
import ReactDOM from 'react-dom';
import { withTheme, renderWithTheme } from 'helpers/test-helpers/theme';
import Navigator from '..';

describe('app/CreateProperty/Navigator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Navigator />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // todo: add tests here...

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Navigator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
