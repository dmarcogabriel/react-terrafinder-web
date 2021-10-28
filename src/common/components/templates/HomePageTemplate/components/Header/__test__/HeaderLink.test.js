import React from 'react';
import ReactDOM from 'react-dom';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
import { HeaderLink } from '../HeaderLink';

describe('', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<HeaderLink />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const tree = renderWithTheme(
      <HeaderLink to="test">Test Link</HeaderLink>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
