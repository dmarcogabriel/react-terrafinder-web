import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Plan from '..';

describe('<Plan />', () => {
  const mockPlan = {
    color: 'green',
    features: [],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Plan plan={mockPlan} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Plan plan={mockPlan} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
