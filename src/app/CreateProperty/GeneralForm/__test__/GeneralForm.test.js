import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { UserProvider } from 'contexts/User';
import { BrowserRouter } from 'react-router-dom';
import GeneralForm from '..';

const Comp = () => (
  <UserProvider>
    <BrowserRouter>
      <GeneralForm />
    </BrowserRouter>
  </UserProvider>
);

describe('<GeneralForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should change property kind', () => {
    const { getByTestId } = render(<Comp />);

    const propertyKind = getByTestId('propertyKind');
    fireEvent.click(propertyKind);

    const option = getByTestId('option-p1');
    fireEvent.click(option);

    const value = getByTestId('propertyKindValue');
    expect(value).toHaveTextContent('Fazenda');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
