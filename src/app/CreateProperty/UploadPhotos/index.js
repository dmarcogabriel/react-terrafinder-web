import React from 'react';
import { MdCloudUpload } from 'react-icons/md';
import Button from 'common/components/Button';
import classes from './UploadPhotos.module.scss';

export default function UploadPhotos() {
  return (
    <div className={classes.uploadPhotos}>
      <h2>Imagens do Imóvel</h2>

      <div className={classes.dropZone}>
        <p className={classes.helperText}>
          Faça o upload ou araste a imagem aqui
        </p>

        <input type="file" />
        <Button className={classes.button}>Upload de Imagens</Button>

        <span>JPG, JPEG, PNG</span>

        <div className={classes.icon}>
          <MdCloudUpload size={100} />
        </div>
      </div>
    </div>
  );
}
