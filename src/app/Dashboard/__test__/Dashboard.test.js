import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '..';

const Comp = () => (
  <Router>
    <Dashboard />
  </Router>
);

jest.mock('hooks/useUser', () => ({
  useUser: () => ({
    currentUser: {
      _id: 'testId',
      firstName: 'Tester',
      avatar: null,
    },
  }),
}));

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should open galery', () => {
    const { getByTestId } = render(<Comp />);

    const fileInput = getByTestId('fileInput');
    const spy = jest.spyOn(fileInput, 'click');

    const uploadPhoto = getByTestId('uploadPhoto');
    fireEvent.click(uploadPhoto);

    expect(spy).toHaveBeenCalled();
  });

  // todo: test file upload

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
