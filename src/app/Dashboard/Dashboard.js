import React, { useEffect, useState, useRef } from 'react';
import Modal from 'common/components/Modal';
import { useUser } from 'hooks/useUser';
import api from 'services/api';
import { loadBase64Image } from 'utils/fileHelper';
import { useTheme } from 'hooks/useTheme';
import { HomePageTemplate } from 'common/components';
import { Box, Typography, Button } from '@mui/material';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import classes from './Dashboard.module.scss';
import MyAds from './MyAds';
import { AvatarPreview, ModalButtons, FileInput } from './styles';

export const Dashboard = () => {
  const { currentUser, updateUser } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [avatar, setAvatar] = useState();
  const inputRef = useRef();
  const { color } = useTheme();
  const { showNotification } = useNotification();

  const openGalery = () => {
    inputRef.current.click();
  };

  const handleCloseModal = () => setShowModal(false);

  const handleFileInputChange = async (e) => {
    const [file] = e.target.files;

    file.data = await loadBase64Image(file);

    setAvatar(file);
  };

  const uploadPhoto = async () => {
    try {
      const data = new FormData();

      data.append('avatar', avatar);

      const res = await api.put(
        `users/upload-photos/${currentUser._id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      updateUser({ avatar: res.data.avatar });
      setShowModal(false);
      showNotification(
        'Avatar adicionado com sucesso!',
        NOTIFICATION_TYPES.SUCCESS
      );
    } catch (error) {
      showNotification(
        'Ocorreu um erro ao tentar adicionar avatar, tente novamente mais tarde',
        NOTIFICATION_TYPES.ERROR
      );
    }
  };

  useEffect(() => {
    if (!currentUser.avatar) {
      setShowModal(true);
    }
  }, [currentUser.avatar]);

  return (
    <HomePageTemplate>
      <div className={classes.dashboard}>
        <MyAds />
      </div>

      <Modal show={showModal}>
        <Box>
          <Typography
            variant="h4"
            component="p"
            px={{ mb: 1 }}
          >{`Bem vindo, ${currentUser.firstName}!`}</Typography>
          {avatar ? (
            <Typography sx={{ my: 1 }}>Confirma essa foto?</Typography>
          ) : (
            <Typography sx={{ my: 1 }}>
              Seu perfil está quase completo! Adicione uma foto sua para chamar
              a atenção dos futuros compradores.
            </Typography>
          )}

          {avatar && (
            <AvatarPreview sx={{ my: 1 }} src={avatar.data} alt="avatar" />
          )}

          <ModalButtons sx={{ mt: 1 }}>
            {avatar ? (
              <Button
                sx={{ mb: 1 }}
                variant="contained"
                color="success"
                onClick={uploadPhoto}
              >
                Confirmar
              </Button>
            ) : (
              <Button
                sx={{ mb: 1 }}
                variant="contained"
                color="info"
                data-testid="uploadPhoto"
                onClick={openGalery}
              >
                Upload de foto
              </Button>
            )}

            <Button
              sx={{ mt: 1 }}
              color="info"
              modifiers="secondary"
              onClick={handleCloseModal}
            >
              {avatar ? 'Cancelar' : 'Agora não'}
            </Button>
          </ModalButtons>

          <FileInput
            data-testid="fileInput"
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleFileInputChange}
          />
        </Box>
      </Modal>
    </HomePageTemplate>
  );
};
