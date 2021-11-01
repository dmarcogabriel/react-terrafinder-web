import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { Footer } from '..';

jest.mock('hooks/useNotification', () => ({
  useNotification: () => ({
    showNotification: jest.fn(),
  }),
}));

let mockUrl;
const mockPush = jest.fn((url) => {
  mockUrl = url;
});
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  useHistory: () => ({
    push: mockPush,
  }),
}));

beforeEach(() => {
  mockUrl = null;
});

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('footer navigation', () => {
    it('should navigate to home', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t1-l1');
      fireEvent.click(listItem);

      expect(mockPush).toHaveBeenCalled();
      expect(mockUrl).toBe('/');
    });

    it('should navigate to about', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t1-l2');
      fireEvent.click(listItem);

      expect(mockUrl).toBe('/about');
    });

    it('should navigate to privacy policy', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t1-l3');
      fireEvent.click(listItem);

      expect(mockUrl).toBe('/privacy-policy');
    });

    it('should navigate to support', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t1-l4');
      fireEvent.click(listItem);

      expect(mockUrl).toBe('/support');
    });

    it('should navigate to create property', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t2-l1');
      fireEvent.click(listItem);

      expect(mockUrl).toBe('/create-property');
    });

    it('should navigate to search property', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t2-l2');
      fireEvent.click(listItem);

      expect(mockUrl).toBe('/search-property');
    });

    it('should navigate to prices and plans', () => {
      const { getByTestId } = render(<Footer />);

      const listItem = getByTestId('link-t2-l3');
      fireEvent.click(listItem);

      expect(mockUrl).toBe('/plans');
    });
  });
});
