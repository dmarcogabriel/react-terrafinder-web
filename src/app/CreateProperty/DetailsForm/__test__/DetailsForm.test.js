import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import { NotificationProvider } from 'contexts/Notification';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
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

  it('should fires go back event', () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(<Comp />);

    const backButton = getByTestId('back');
    fireEvent.click(backButton);

    expect(history.location.pathname).toEqual('/');
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

    it('should add 5 activities', () => {
      const { getByTestId } = render(<Comp />);

      const addActivityButton = getByTestId('actButton');

      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);

      const acts = getByTestId('acts');
      const lastActivity = getByTestId('act-4');
      expect(lastActivity).toBeInTheDocument();
      expect(acts.childElementCount).toEqual(5);
    });

    it('should fail to add more than 5 activities', () => {
      const { getByTestId } = render(<Comp />);

      const addActivityButton = getByTestId('actButton');

      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);

      const acts = getByTestId('acts');
      expect(acts.childElementCount).toEqual(5);
    });

    it('should change the right input', () => {
      const { getByTestId } = render(<Comp />);

      const addActivityButton = getByTestId('actButton');

      fireEvent.click(addActivityButton);
      fireEvent.click(addActivityButton);

      const selectedInput = getByTestId('actInput-1');
      fireEvent.change(selectedInput, { target: { value: 'testing' } });

      expect(selectedInput).toHaveValue('testing');
      expect(getByTestId('actInput-0')).toHaveValue('');
      expect(getByTestId('actInput-2')).toHaveValue('');
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

    it('should add 5 farmings', () => {
      const { getByTestId } = render(<Comp />);

      const addFarming = getByTestId('addFarming');
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);

      const farms = getByTestId('farms');
      const farm = getByTestId('farm-4');
      expect(farm).toBeInTheDocument();
      expect(farms.childElementCount).toEqual(5);
    });

    it('should fail fo add more than 5 farmings', () => {
      const { getByTestId } = render(<Comp />);

      const addFarming = getByTestId('addFarming');
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);
      fireEvent.click(addFarming);

      const farms = getByTestId('farms');
      expect(farms.childElementCount).toEqual(5);
    });

    it('should change farming value', () => {
      const { getByTestId } = render(<Comp />);

      const farmInput = getByTestId('farmInput-0');
      fireEvent.change(farmInput, { target: { value: 'testing' } });

      expect(farmInput).toHaveValue('testing');
    });

    it('should change the right input', () => {
      const { getByTestId } = render(<Comp />);

      const addFarmingButton = getByTestId('addFarming');

      fireEvent.click(addFarmingButton);
      fireEvent.click(addFarmingButton);

      const selectedInput = getByTestId('farmInput-1');
      fireEvent.change(selectedInput, { target: { value: 'testing' } });

      expect(selectedInput).toHaveValue('testing');
      expect(getByTestId('farmInput-0')).toHaveValue('');
      expect(getByTestId('farmInput-2')).toHaveValue('');
    });
  });
});
