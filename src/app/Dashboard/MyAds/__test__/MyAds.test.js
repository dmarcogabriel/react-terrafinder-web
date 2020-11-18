import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import MyAds from '..';

const Comp = (props) => (
  <UserProvider>
    <MyAds {...props} />
  </UserProvider>
);

describe('<MyAds />', () => {
  jest.doMock('hooks/useUser', () => ({
    useUser: () => ({
      currentUser: null,
    }),
  }));

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Add tests here...

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
