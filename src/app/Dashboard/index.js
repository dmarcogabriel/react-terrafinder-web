import React, { useEffect } from 'react';
import Header from 'common/components/Header';
import Footer from 'common/components/Footer';
import Modal from 'common/components/Modal';
import { Route, Switch } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import classes from './Dashboard.module.scss';
import MyAds from './MyAds';

export default function Dashboard() {
  const { currentUser } = useUser();

  useEffect(() => {
    console.log(currentUser);
    if (!currentUser.avatar) {
      // todo: modal para usuário adicionar foto
      console.log('Falta foto');
    }
  }, []);

  return (
    <div className={classes.dashboard}>
      <Header />

      <Switch>
        <Route path="/">
          <MyAds />
        </Route>
      </Switch>

      <Footer />

      <Modal>
        <h1>HELLOO</h1>
      </Modal>
    </div>
  );
}
