import React, { useEffect, useState, useRef } from 'react';
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';
import Modal from 'common/components/Modal';
import { Route, Switch } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import api from 'services/api';
import { loadBase64Image } from 'utils/fileHelper';
import { useTheme } from 'hooks/useTheme';
import classes from './Dashboard.module.scss';
import MyAds from './MyAds';
import { Button } from './styles';

export const Dashboard = () => {
  const { currentUser, updateUser } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [avatar, setAvatar] = useState();
  const inputRef = useRef();
  const { color } = useTheme();

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
    } catch (error) {
      console.log('erro', error.response);
    }
  };

  useEffect(() => {
    console.log('Current User: ', currentUser);
    if (!currentUser.avatar) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      <div className={classes.dashboard}>
        <Header />

        <Switch>
          <Route path="/">
            <MyAds />
          </Route>
        </Switch>

        <Footer />
      </div>

      <Modal show={showModal}>
        <div className={classes.modal}>
          <h1>{`Bem vindo, ${currentUser.firstName}!`}</h1>

          {avatar ? (
            <p>Confirma essa foto?</p>
          ) : (
            <p>
              Seu perfil está quase completo! Adicione uma foto sua para chamar
              a atenção dos futuros compradores.
            </p>
          )}

          {avatar && <img src={avatar.data} alt="avatar" />}

          <div className={classes.buttons}>
            {avatar ? (
              <Button
                modifiers="custom"
                bg={color.blue.df}
                color={color.white.df}
                onClick={uploadPhoto}
              >
                Confirmar
              </Button>
            ) : (
              <Button
                modifiers="custom"
                bg={color.blue.df}
                color={color.white.df}
                dataTestId="uploadPhoto"
                onClick={openGalery}
              >
                Upload de foto
              </Button>
            )}

            <Button modifiers="secondary" onClick={handleCloseModal}>
              {avatar ? 'Cancelar' : 'Agora não'}
            </Button>
          </div>

          <input
            data-testid="fileInput"
            type="file"
            ref={inputRef}
            accept="image/png, image/jpeg"
            onChange={handleFileInputChange}
          />
        </div>
      </Modal>
    </>
  );
};
