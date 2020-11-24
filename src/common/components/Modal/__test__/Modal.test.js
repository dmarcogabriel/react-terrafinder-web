import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Modal from '..';

describe('<Modal />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show modal', () => {
    const { getByTestId } = render(<Modal show />);

    const modal = getByTestId('modal');

    expect(modal).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
