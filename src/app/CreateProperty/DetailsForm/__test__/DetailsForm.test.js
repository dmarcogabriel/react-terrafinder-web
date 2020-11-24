import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import { NotificationProvider } from 'contexts/Notification';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsForm from '..';

const Comp = () => (
  <UserProvider>
    <NotificationProvider>
      <Router>
        <DetailsForm />
      </Router>
    </NotificationProvider>
  </UserProvider>
);

describe('<DetailsForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('activity', () => {
    it('should add activity', () => {
      const { getByTestId } = render(<Comp />);

      const addActivityButton = getByTestId('actButton');
      fireEvent.click(addActivityButton);

      const activity = getByTestId('act-1');
      expect(activity).toBeInTheDocument();
    });

    it('should change activity value', () => {
      const { getByTestId } = render(<Comp />);

      const actInput = getByTestId('actInput-0');
      fireEvent.change(actInput, { target: { value: 'testing' } });

      expect(actInput).toHaveValue('testing');
    });
  });

  describe('farming', () => {
    it('should add farming', () => {
      const { getByTestId } = render(<Comp />);

      const addFarming = getByTestId('addFarming');
      fireEvent.click(addFarming);

      const farm = getByTestId('farm-1');
      expect(farm).toBeInTheDocument();
    });

    it('should change farming value', () => {
      const { getByTestId } = render(<Comp />);

      const farmInput = getByTestId('farmInput-0');
      fireEvent.change(farmInput, { target: { value: 'testing' } });

      expect(farmInput).toHaveValue('testing');
    });
  });
});
