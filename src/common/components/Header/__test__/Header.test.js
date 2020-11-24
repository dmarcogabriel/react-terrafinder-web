import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import Header from '..';

let replaceResponse;
const mockReplace = jest.fn((url) => {
  replaceResponse = url;
});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    replace: mockReplace,
  }),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

let mockUser;
const mockLogout = jest.fn();

jest.mock('hooks/useUser', () => ({
  useUser: () => ({
    currentUser: mockUser,
    logout: mockLogout,
  }),
}));

describe('<Header />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('logged', () => {
    mockUser = { firstName: 'Tester' };

    it('should show grettings', () => {
      const { getByTestId } = render(<Header />);

      const greetings = getByTestId('greetings');
      expect(greetings).toBeInTheDocument();
      expect(greetings).toHaveTextContent('Olá, Tester');
    });

    it('should show logout button', () => {
      const { getByTestId } = render(<Header />);

      const logoutButton = getByTestId('logoutButton');
      expect(logoutButton).toBeInTheDocument();
      expect(logoutButton).toHaveTextContent('Logout');
    });

    it('should show menu', () => {
      const { getByTestId } = render(<Header />);

      const menuButton = getByTestId('menuButton');
      fireEvent.click(menuButton);

      const menu = getByTestId('menu');
      expect(menu).toBeInTheDocument();
    });

    it('should handle logout', () => {
      const { getByTestId } = render(<Header />);

      const logoutButton = getByTestId('logoutButton');
      fireEvent.click(logoutButton);

      expect(mockLogout).toHaveBeenCalled();
      expect(mockReplace).toHaveBeenCalled();
      expect(replaceResponse).toEqual('/home');
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
