import React, { useState, useRef } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { validateFile } from 'utils/validators';
import { loadBase64Image } from 'utils/fileHelper';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { NOTIFICATION_TYPES, useNotification } from 'hooks/useNotification';
import { Modal, useModal } from 'common/components';
import { Typography, Button, Box } from '@mui/material';
import { useUser } from 'hooks/useUser';
import { CameraAltOutlined as CameraIcon } from '@mui/icons-material';
import classes from './UploadPhotos.module.scss';
import Navigator from '../../Navigator';
import { UploadButton, LabelText } from './styles';
import { useNewProperty } from '../../../NewPropertyContext';
import StepTitle from '../../StepTtitle';

export const UploadPhotos = () => {
  const [opacity, setOpacity] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [, setUploading] = useState(false); // todo: show modal
  const history = useHistory();
  const { params } = useRouteMatch();
  const { showNotification } = useNotification();
  const inputRef = useRef();
  const { state } = useLocation();
  const { open, triggerModal } = useModal();
  const { currentUser } = useUser();
  const { nextStep, setPhotos } = useNewProperty();

  const handleDrop = async (e) => {
    e.preventDefault();
    setOpacity(1);

    if (selectedFiles.length < 3) {
      const { files } = e.dataTransfer;

      if (files.length) {
        for (let i = 0; i < files.length; i++) {
          if (validateFile(files[i])) {
            const file = files[i];

            file.data = await loadBase64Image(files[i]);

            setSelectedFiles([...selectedFiles, file]);
          }
        }
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setOpacity(0.7);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setOpacity(1);
  };

  const removeImage = (index) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  // const uploadPhotos = async () => {
  //   try {
  //     setUploading(true);

  //     const data = new FormData();

  //     selectedFiles.forEach((file, i) => {
  //       data.append(`photo${i + 1}`, file);
  //     });

  //     await api.put(
  //       `properties/upload-photos/${params.id}`,
  //       { ...data, userId: currentUser._id },
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       }
  //     );

  //     setUploading(false);
  //     history.replace('/create-property/review', {
  //       plan: state.plan,
  //       propertyId: params.id,
  //     });
  //     showNotification(
  //       'Fotos enviadas com sucesso!',
  //       NOTIFICATION_TYPES.SUCCESS
  //     );
  //   } catch (error) {
  //     setUploading(false);
  //     showNotification(
  //       'Ocorreu um erro ao enviar fotos!',
  //       NOTIFICATION_TYPES.ERROR
  //     );
  //   }
  // };

  const openGalery = () => inputRef.current.click();

  const handleChangeFileInput = async (e) => {
    if (selectedFiles.length < 3) {
      const [file] = e.target.files;

      file.data = await loadBase64Image(file);

      setSelectedFiles((old) => [...old, file]);
    }
  };

  const handleSendPhotosLater = () =>
    history.replace('/create-property/review');

  const handleNext = () => {
    if (selectedFiles.length) {
      setPhotos(selectedFiles);
      history.replace('/create-property/review');
      nextStep();
    } else triggerModal();
  };

  return (
    <>
      <div className={classes.uploadPhotos}>
        <Box sx={{ textAlign: 'center' }}>
          <CameraIcon fontSize="large" color="success" />
          <StepTitle>Conteúdos do Imóvel</StepTitle>
        </Box>

        <div
          data-testid="dropZone"
          className={classes.dropZone}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          style={{ opacity }}
        >
          <LabelText sx={{ my: 1 }}>
            Faça o upload ou arraste a imagem aqui
          </LabelText>

          <input
            data-testid="uploadInput"
            onChange={handleChangeFileInput}
            ref={inputRef}
            accept="image/*"
            type="file"
          />

          <UploadButton
            data-testid="uploadButton"
            color="grey"
            variant="contained"
            sx={{ my: 1, px: 5 }}
            onClick={openGalery}
          >
            Upload de Imagens
          </UploadButton>

          <Typography variant="body2" sx={{ fontWeight: 'bold', my: 1 }}>
            JPG, JPEG, PNG
          </Typography>

          {!selectedFiles.length && (
            <div className={classes.icon}>
              <MdCloudUpload size={100} />
            </div>
          )}

          <div className={classes.previewImages}>
            {selectedFiles.map((file, i) => (
              <div data-testid={`image-${i}`} key={String(i)}>
                <button
                  data-testid={`delete-${i}`}
                  type="button"
                  onClick={() => removeImage(i)}
                >
                  <AiFillCloseCircle
                    size={26}
                    className={classes.removeImageIcon}
                  />
                </button>

                <img src={file.data} alt={file.name} />
              </div>
            ))}
          </div>
        </div>

        <Navigator
          nextButtonText={
            selectedFiles.length ? 'Próximo' : 'Enviar mais tarde'
          }
          onBack={history.goBack}
          onNext={handleNext}
        />
      </div>
      <Modal show={open} onClose={triggerModal}>
        <Typography sx={{ mb: 2 }}>
          Tem certeza de que deseja enviar fotos mais tarde?
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Button
            color="info"
            variant="contained"
            sx={{ my: 1 }}
            onClick={triggerModal}
          >
            Voltar para enviar
          </Button>
          <Button sx={{ my: 1 }} color="error" onClick={handleSendPhotosLater}>
            Enviar mais tarde
          </Button>
        </Box>
      </Modal>
    </>
  );
};
