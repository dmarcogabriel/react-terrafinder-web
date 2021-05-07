import React from 'react';
import ReactDOM from 'react-dom';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
import Button from '..';

describe('atm/Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Button />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // todo: add tests here...

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
