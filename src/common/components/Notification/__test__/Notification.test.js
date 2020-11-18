import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import { NotificationProvider } from 'contexts/Notification';
import Notification from '..';

const Comp = (props) => (
  <NotificationProvider>
    <Notification {...props} />
  </NotificationProvider>
);

describe('<Notification />', () => {
  jest.doMock('hooks/useNotification', () => ({
    useNotification: () => ({
      notification: {
        message: 'This is a test message',
        type: 'info',
      },
      show: true,
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
