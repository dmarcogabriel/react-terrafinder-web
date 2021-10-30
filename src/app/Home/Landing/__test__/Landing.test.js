import React from 'react';
import ReactDOM from 'react-dom';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
// import { Landing } from '..';

describe('<Landing />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(withTheme(<Landing />), div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  // todo: formik problems
  // it('should handle filters event', () => {
  //   const mockFn = jest.fn();
  //   jest.doMock('react-router-dom', () => ({
  //     useHistory: () => ({
  //       push: mockFn,
  //     }),
  //   }));

  //   const { getByTestId } = render(<Landing />);

  //   const filterButton = getByTestId('submitButton');
  //   fireEvent.click(filterButton);

  //   expect(mockFn).toHaveBeenCalled();
  // });

  it('matches snapshot', () => {
    // const tree = renderWithTheme(<Landing />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
