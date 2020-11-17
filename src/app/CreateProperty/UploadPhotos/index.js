import React, { useState, useRef } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import Button from 'common/components/Button';
import { validateFile } from 'utils/validators';
import { loadBase64Image } from 'utils/fileHelper';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useHistory, useRouteMatch } from 'react-router-dom';
import api from 'services/api';
import { NOTIFICATION_TYPES, useNotification } from 'hooks/useNotification';
import { useUser } from 'hooks/useUser';
import classes from './UploadPhotos.module.scss';
import Navigator from '../Navigator';

export default function UploadPhotos() {
  const [opacity, setOpacity] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [, setUploading] = useState(false); // todo: show modal
  const history = useHistory();
  const { params } = useRouteMatch();
  const { showNotification } = useNotification();
  const inputRef = useRef();
  const { currentUser } = useUser();

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

  const goBack = () => history.replace('/dashboard');

  const uploadPhotos = async () => {
    try {
      setUploading(true);

      const data = new FormData();

      selectedFiles.forEach((file, i) => {
        data.append(`photo${i + 1}`, file);
      });

      await api.post(`property/upload-photos/${params.id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': currentUser.token,
        },
      });

      setUploading(false);
      history.replace('/dashboard');
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

  return (
    <div className={classes.uploadPhotos}>
      <h2>Imagens do Imóvel</h2>

      <div
        className={classes.dropZone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{ opacity }}
      >
        <p className={classes.helperText}>
          Faça o upload ou araste a imagem aqui
        </p>

        <input
          onChange={handleChangeFileInput}
          ref={inputRef}
          accept="image/png, image/jpg"
          type="file"
        />

        <Button className={classes.button} onClick={openGalery}>
          Upload de Imagens
        </Button>

        <span>JPG, JPEG, PNG</span>

        {!selectedFiles.length && (
          <div className={classes.icon}>
            <MdCloudUpload size={100} />
          </div>
        )}

        <div className={classes.previewImages}>
          {selectedFiles.map((file, i) => (
            <div key={String(i)}>
              <button type="button" onClick={() => removeImage(i)}>
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
        onBack={goBack}
        onNext={uploadPhotos}
      />
    </div>
  );
}
