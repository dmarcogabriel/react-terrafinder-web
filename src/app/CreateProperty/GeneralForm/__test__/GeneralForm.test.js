import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import { GeneralForm } from '..';

let pushResponse;
const mockPush = jest.fn((url) => {
  pushResponse = url;
});
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
  useLocation: () => ({
    state: { plan: 'test-plan' },
  }),
}));

jest.mock('hooks/useUser', () => ({
  useUser: jest.fn(() => ({
    currentUser: { firstName: 'Tester' },
  })),
}));

const Comp = () => (
  <UserProvider>
    <GeneralForm />
  </UserProvider>
);

describe('<GeneralForm />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Comp />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  it('should change property kind', () => {
    // const { getByTestId } = render(<Comp />);
    // const propertyKind = getByTestId('propertyKind');
    // fireEvent.click(propertyKind);
    // const option = getByTestId('option-p1');
    // fireEvent.click(option);
    // const value = getByTestId('propertyKindValue');
    // expect(value).toHaveTextContent('Fazenda');
  });

  it('should create property', async () => {
    // const { getByTestId } = render(<Comp />);
    // const propNameInput = getByTestId('propNameInput');
    // const descInput = getByTestId('descInput');
    // const propertyKind = getByTestId('propertyKind');
    // const stateInput = getByTestId('stateInput');
    // const nearbyInput = getByTestId('nearbyInput');
    // const cepInput = getByTestId('cepInput');
    // fireEvent.change(propNameInput, { target: { value: 'Testing Farm' } });
    // fireEvent.change(descInput, { target: { value: 'Some description' } });
    // fireEvent.change(stateInput, { target: { value: 'SP' } });
    // fireEvent.change(nearbyInput, { target: { value: 'Los Santos' } });
    // fireEvent.change(cepInput, { target: { value: '11222333' } });
    // fireEvent.click(propertyKind);
    // const option = getByTestId('option-p1');
    // fireEvent.click(option);
    // const propertyKindValue = getByTestId('propertyKindValue');
    // const submitButton = getByTestId('next');
    // await waitFor(() => fireEvent.click(submitButton));
    // expect(propNameInput).toHaveValue('Testing Farm');
    // expect(descInput).toHaveValue('Some description');
    // expect(stateInput).toHaveValue('SP');
    // expect(nearbyInput).toHaveValue('Los Santos');
    // expect(cepInput).toHaveValue('11222333');
    // expect(propertyKindValue).toHaveTextContent('Fazenda');
    // expect(mockPush).toHaveBeenCalled();
    // expect(pushResponse).toEqual('/create-property/details?step=2');
  });

  it('matches snapshot', () => {
    // const tree = renderer.create(<Comp />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
