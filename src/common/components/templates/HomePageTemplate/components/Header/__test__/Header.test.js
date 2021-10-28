import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render } from '@testing-library/react';
import { renderWithTheme, withTheme } from 'helpers/test-helpers/theme';
import { Header } from '..';

let replaceResponse;
const mockReplace = jest.fn((url) => {
  replaceResponse = url;
});
let pushResponse;
const mockPush = jest.fn((url) => {
  pushResponse = url;
});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    replace: mockReplace,
    push: mockPush,
  }),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

let mockUser;
const mockLogout = jest.fn();

jest.mock('hooks/useUser', () => ({
  useUser: () => ({
    currentUser: mockUser,
    userIsLogged: jest.fn(() => !!mockUser),
    logout: mockLogout,
  }),
}));

describe('common/components/templates/HomePageTemplate/Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(withTheme(<Header />), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('unlogged', () => {
    it('should handle click menu item', () => {
      const { getByTestId } = render(withTheme(<Header />));

      const menuButton = getByTestId('menuButton');
      fireEvent.click(menuButton);

      const firstMenuItem = getByTestId('menu-item-l1');
      fireEvent.click(firstMenuItem);

      expect(mockPush).toHaveBeenCalled();
      expect(pushResponse).toEqual('/search-property');
    });

    it('should handle onClose menu', () => {
      const { getByTestId } = render(withTheme(<Header />));

      const menuButton = getByTestId('menuButton');
      fireEvent.click(menuButton);
      fireEvent.click(menuButton);

      const menu = getByTestId('menu');
      expect(menu).toBeInTheDocument();
    });

    it('matches snapshot', () => {
      const tree = renderWithTheme(<Header />).toJSON('HeaderUnlogged');
      expect(tree).toMatchSnapshot();
    });
  });

  describe('logged', () => {
    it('should show grettings', () => {
      mockUser = { firstName: 'Tester' };
      const { getByTestId } = render(withTheme(<Header />));

      const greetings = getByTestId('greetings');
      expect(greetings).toBeInTheDocument();
      expect(greetings).toHaveTextContent('Olá, Tester');
    });

    it('should show logout button', () => {
      mockUser = { firstName: 'Tester' };
      const { getByTestId } = render(withTheme(<Header />));

      const logoutButton = getByTestId('logoutButton');
      expect(logoutButton).toBeInTheDocument();
      expect(logoutButton).toHaveTextContent('Logout');
    });

    it('should show menu', () => {
      const { getByTestId } = render(withTheme(<Header />));

      const menuButton = getByTestId('menuButton');
      fireEvent.click(menuButton);

      const menu = getByTestId('menu');
      expect(menu).toBeInTheDocument();
    });

    it('should handle logout', () => {
      mockUser = { firstName: 'Tester' };
      const { getByTestId } = render(withTheme(<Header />));

      const logoutButton = getByTestId('logoutButton');
      fireEvent.click(logoutButton);

      expect(mockLogout).toHaveBeenCalled();
      expect(mockReplace).toHaveBeenCalled();
      expect(replaceResponse).toEqual('/home');
    });

    it('matches snapshot', () => {
      mockUser = { firstName: 'Tester' };
      const tree = renderWithTheme(<Header />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
