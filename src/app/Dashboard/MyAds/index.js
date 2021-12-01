import React, { useCallback, useEffect, useState } from 'react';
import Property from 'common/components/Property';
import { useUser } from 'hooks/useUser';
import api from 'services/api';
import { useHistory } from 'react-router-dom';
import { Add as AddIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import classes from './MyAds.module.scss';
import { MyAdsHeader, CreateAdButton } from './styles';

export default function MyAds() {
  const { currentUser } = useUser();
  const { push } = useHistory();
  const [myProperties, setMyProperties] = useState([]);

  const handleSelect = (id) => {
    push(`property/${id}`);
  };

  const loadMyProperties = useCallback(async () => {
    try {
      const { data: res } = await api.get(`properties/user/${currentUser._id}`);
      setMyProperties(res.data.properties);
    } catch (error) {
      setMyProperties([]);
    }
  }, [currentUser._id]);

  const newPropertyAd = () => push('/create-property');

  const handleClickEdit = (propertyId) =>
    push(`/dashboard/edit-property/${propertyId}`);

  useEffect(() => {
    loadMyProperties();
  }, [loadMyProperties]);

  return (
    <div className={classes.myAds}>
      <MyAdsHeader>
        <Typography component="h1" variant="h2">
          Meus anúncios
        </Typography>

        <CreateAdButton
          startIcon={<AddIcon />}
          variant="contained"
          color="success"
          data-testid="createProperty"
          onClick={newPropertyAd}
        >
          Criar Anúncio
        </CreateAdButton>
      </MyAdsHeader>

      <div data-testid="propertyList" className={classes.adsList}>
        {myProperties.map((property, i) => (
          <Property
            dataTestId={`property-${i}`}
            key={property._id}
            index={i}
            property={property}
            onSelect={handleSelect}
            onClickEdit={handleClickEdit}
            isPremium={property.plan && property.plan.type === 'premium-plan'}
          />
        ))}
      </div>
    </div>
  );
}
