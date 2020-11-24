import React, { useEffect, useState } from 'react';
import Property from 'common/components/Property';
import Button from 'common/components/Button';
import { MdAdd } from 'react-icons/md';
import { useUser } from 'hooks/useUser';
import api from 'services/api';
import { useHistory } from 'react-router-dom';
import classes from './MyAds.module.scss';

export default function MyAds() {
  const { currentUser } = useUser();
  const history = useHistory();
  const [myProperties, setMyProperties] = useState([]);

  const handleSelect = (id) => {
    history.push(`property/${id}`);
  };

  const loadMyProperties = async () => {
    const res = await api.get(`properties/user/${currentUser._id}`);

    setMyProperties(res.data.properties);
  };

  const newPropertyAd = () => history.push('/create/property?step=1');

  useEffect(() => {
    loadMyProperties();
  }, []);

  return (
    <div className={classes.myAds}>
      <h1>Meus anúncios</h1>

      <Button
        dataTestId="createProperty"
        className={classes.createButton}
        onClick={newPropertyAd}
      >
        <MdAdd size={22} />

        <p>Criar Anúncio</p>
      </Button>

      <div data-testid="propertyList" className={classes.adsList}>
        {myProperties.map((property, i) => (
          <Property
            dataTestId={`property-${i}`}
            key={property._id}
            index={i}
            property={property}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}
