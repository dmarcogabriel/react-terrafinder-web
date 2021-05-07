import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor } from '@testing-library/react';
import api from 'services/api';
import { withTheme, renderWithTheme } from 'helpers/test-helpers/theme';
import Property from '..';

jest.mock('react-router-dom', () => ({
  useRouteMatch: () => ({
    params: {
      id: 'testId',
    },
  }),
}));

const mockProperty = {
  amount: 999999,
  size: '20',
  nearbyCity: 'San Andreas',
  state: 'SP',
  propertyKind: 'Fazenda',
  farming: ['farm test'],
  activities: [
    'activity 1',
    'activity 2',
    'activity 3',
    'activity 4',
    'activity 5',
  ],
  photos: ['test1', 'test2'],
  user: {
    firstName: 'Tester',
    lastName: 'da Silva',
    phone: '14999998888',
  },
};

const Comp = (props) => withTheme(<Property {...props} />);

describe('<Property />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render property data', async () => {
    jest.spyOn(api, 'get').mockImplementationOnce(
      jest.fn(() =>
        Promise.resolve({
          data: {
            property: mockProperty,
          },
        })
      )
    );
    const { getByTestId } = await waitFor(() => render(<Comp />));

    const property = getByTestId('property');

    expect(property).toBeInTheDocument();
  });

  it('should fail to render property data', async () => {
    jest
      .spyOn(api, 'get')
      .mockImplementationOnce(jest.fn(() => Promise.reject()));

    const { getByTestId } = await waitFor(() => render(<Comp />));

    const error = getByTestId('error');

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(
      'Falha ao carregar propriedade! Por favor tente mais tarde.'
    );
  });

  // todo: test window.location.href
  // it('should call send message event', async () => {
  //   // jest
  //   //   .spyOn(window.location, 'href')
  //   //   .mockImplementationOnce(() => ({

  //   //   }));

  //   const { getByTestId } = await waitFor(() => render(<Comp />));

  //   const error = getByTestId('error');

  //   expect(error).toBeInTheDocument();
  //   expect(error).toHaveTextContent(
  //     'Falha ao carregar propriedade! Por favor tente mais tarde.'
  //   );
  // });

  it('matches snapshot', () => {
    const tree = renderWithTheme(<Property />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
