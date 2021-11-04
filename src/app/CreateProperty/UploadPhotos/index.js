import React, { useState, useRef } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { validateFile } from 'utils/validators';
import { loadBase64Image } from 'utils/fileHelper';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import api from 'services/api';
import { NOTIFICATION_TYPES, useNotification } from 'hooks/useNotification';
import { Modal, useModal } from 'common/components';
import { Typography, Button, Box } from '@mui/material';
import classes from './UploadPhotos.module.scss';
import Navigator from '../Navigator';
import { UploadButton } from './styles';
import { CreatePropertyContainer } from '../components';

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

  const uploadPhotos = async () => {
    try {
      setUploading(true);

      const data = new FormData();

      selectedFiles.forEach((file, i) => {
        data.append(`photo${i + 1}`, file);
      });

      await api.put(`property/upload-photos/${params.id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploading(false);
      history.replace('/create-property/review?step=5', {
        plan: state.plan,
        propertyId: params.id,
      });
      showNotification(
        'Fotos enviadas com sucesso!',
        NOTIFICATION_TYPES.SUCCESS
      );
    } catch (error) {
      setUploading(false);
      showNotification(
        'Ocorreu um erro ao enviar fotos!',
        NOTIFICATION_TYPES.ERROR
      );
    }
  };

  const openGalery = () => inputRef.current.click();

  const handleChangeFileInput = async (e) => {
    if (selectedFiles.length < 3) {
      const [file] = e.target.files;

      file.data = await loadBase64Image(file);

      setSelectedFiles((old) => [...old, file]);
    }
  };

  const handleSendPhotosLater = () =>
    history.replace('/create-property/review?step=5', {
      plan: state.plan,
      propertyId: params.id,
    });

  return (
    <CreatePropertyContainer>
      <div className={classes.uploadPhotos}>
        <h2>Imagens do Imóvel</h2>

        <div
          data-testid="dropZone"
          className={classes.dropZone}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          style={{ opacity }}
        >
          <p className={classes.helperText}>
            Faça o upload ou arraste a imagem aqui
          </p>

          <input
            data-testid="uploadInput"
            onChange={handleChangeFileInput}
            ref={inputRef}
            accept="image/png, image/jpg"
            type="file"
          />

          <UploadButton dataTestId="uploadButton" onClick={openGalery}>
            Upload de Imagens
          </UploadButton>

          <span>JPG, JPEG, PNG</span>

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
          nextButtonText="Fazer Upload"
          backButtonText="Enviar mais tarde"
          onBack={triggerModal}
          onNext={uploadPhotos}
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
          <Button variant="contained" sx={{ my: 1 }} onClick={triggerModal}>
            Voltar para enviar
          </Button>
          <Button sx={{ my: 1 }} color="error" onClick={handleSendPhotosLater}>
            Enviar mais tarde
          </Button>
        </Box>
      </Modal>
    </CreatePropertyContainer>
  );
};
