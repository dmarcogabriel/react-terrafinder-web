---
to: src/<%= path %>/<%= h.inflection.camelize(name) %>/__test__/<%= h.inflection.camelize(name) %>.test.js
unless_exists: true
---

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import <%= h.inflection.camelize(name) %> from '..';

describe('<<%= h.inflection.camelize(name) %> />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<<%= h.inflection.camelize(name) %> />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<<%= h.inflection.camelize(name) %> />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
