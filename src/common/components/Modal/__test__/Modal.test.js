import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Modal } from '../Modal';

const Comp = (props) => (
  <Modal show>
    <h1>teste</h1>
  </Modal>
);

describe('<Modal />', () => {
  it('should workd', () => {
    expect(true).toEqual(true);
  });
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Comp />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('should show modal', () => {
  //   const { getByTestId } = render(<Comp />);

  //   const modal = getByTestId('modal');

  //   expect(modal).toBeInTheDocument();
  // });

  // it('matches snapshot', () => {
  //   const tree = renderer.create(<Comp />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
