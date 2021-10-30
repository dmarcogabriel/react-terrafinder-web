import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
// import { Dashboard } from '..';

const Comp = () => <Router>{/* <Dashboard /> */}</Router>;

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
    // const div = document.createElement('div');
    // ReactDOM.render(withTheme(<Comp />), div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  it('should open galery', () => {
    // const { getByTestId } = render(withTheme(<Comp />));
    // const fileInput = getByTestId('fileInput');
    // const spy = jest.spyOn(fileInput, 'click');
    // const uploadPhoto = getByTestId('uploadPhoto');
    // fireEvent.click(uploadPhoto);
    // expect(spy).toHaveBeenCalled();
  });

  // todo: test file upload

  it('matches snapshot', () => {
    // const tree = renderWithTheme(<Comp />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
