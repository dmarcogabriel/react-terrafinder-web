import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationProvider } from 'contexts/Notification';
import { UserProvider } from 'contexts/User';
import UploadPhotos from '..';
import mockImage from './mockImage.jpg';

const Comp = (props) => (
  <NotificationProvider>
    <UserProvider>
      <Router>
        <UploadPhotos {...props} />
      </Router>
    </UserProvider>
  </NotificationProvider>
);

describe('<UploadPhotos />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Comp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should open galery', () => {
    const { getByTestId } = render(<Comp />);

    const uploadInput = getByTestId('uploadInput');
    const mockFn = jest.spyOn(uploadInput, 'click');

    const uploadButton = getByTestId('uploadButton');
    fireEvent.click(uploadButton);

    expect(mockFn).toHaveBeenCalled();
  });

  // todo: test on change
  // it('should fire change file input', () => {
  //   const { getByTestId } = render(<Comp />);

  //   const uploadInput = getByTestId('uploadInput');
  //   fireEvent.change(uploadInput, { target: { files: [mockImage] } });

  //   const image = getByTestId('image-0');

  //   expect(image).toBeInTheDocument();
  // });

  describe('drop zone', () => {
    it('should change drop zone opacity', () => {
      const { getByTestId } = render(<Comp />);

      const dropZone = getByTestId('dropZone');
      fireEvent.dragOver(dropZone);

      expect(dropZone.style.opacity).toEqual('0.7');
    });

    it('should change drop zone opacity to default', () => {
      const { getByTestId } = render(<Comp />);

      const dropZone = getByTestId('dropZone');
      fireEvent.dragOver(dropZone);
      fireEvent.dragLeave(dropZone);

      expect(dropZone.style.opacity).toEqual('1');
    });
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Comp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
