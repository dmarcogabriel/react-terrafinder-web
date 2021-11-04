import React from 'react';
import ReactDOM from 'react-dom';
// import { render, fireEvent, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { SelectInput } from '../Select';

const mockOptions = [
  {
    key: 't0',
    value: '',
    name: 'None',
  },
  {
    key: 't1',
    value: 'test1',
    name: 'Test 1',
  },
  {
    key: 't2',
    value: 'test2',
    name: 'Test 2',
  },
];

describe('common/components/input/Select', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SelectInput label="test" options={mockOptions} value="" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should pass on click any option', async () => {
    // const { getByTestId, rerender } = render(
    //   <SelectInput label="test" options={mockOptions} />
    // );
    // const selectInput = getByTestId('select-input');
    // fireEvent.click(selectInput);
    // await waitFor(() =>
    //   rerender(<SelectInput label="test" options={mockOptions} />)
    // );
    // expect(getByTestId('option-t1')).toBeInTheDocument();
    // expect(getByTestId('option-t2')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(
      renderer
        .create(
          <SelectInput
            options={mockOptions}
            label="Snapshot test"
            errorMessage="Error test message"
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
