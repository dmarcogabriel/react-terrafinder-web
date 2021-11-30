import React, { useEffect, useState } from 'react';
import Property from 'common/components/Property';
import { useHistory, useLocation } from 'react-router-dom';
import api from 'services/api';
import queryString from 'query-string';
import { HomePageTemplate } from 'common/components';
import { Typography } from '@mui/material';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import classes from './SearchProperty.module.scss';
import { AdvancedFilters } from './components';

export const Properties = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showNotification } = useNotification();

  const selectProperty = (id) => {
    history.push(`/property/${id}`);
  };

  const loadProperties = React.useCallback(
    async (queryParams = null) => {
      try {
        setIsLoading(true);
        let query = '?';
        if (queryParams)
          query += queryString.stringify({ isActive: true, ...queryParams });
        else if (search)
          query += queryString.stringify({
            isActive: true,
            ...queryString.parse(search),
          });

        const { data: res } = await api.get(`properties${query}`);

        setProperties(res.data.properties);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('erro', error);
        showNotification(
          'Ocorreu um erro ao buscar anúncios.',
          NOTIFICATION_TYPES.ERROR
        );
      }
    },
    [search, showNotification]
  );

  const handleSearch = async (e) => {
    await loadProperties(e);
  };

  const handleChange = (field) => (value) => {
    console.log(field, value);
  };

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  return (
    <HomePageTemplate>
      <div className={classes.container}>
        <h1>Use os filtros abaixo para melhorar o resultado de sua busca</h1>

        <AdvancedFilters onSearch={handleSearch} onChange={handleChange} />

        {/* 
        //todo: add loading here
        */}
        {!isLoading && !!properties.length && (
          <div className={classes.propertiesList}>
            {properties.map((property) => (
              <Property
                key={property._id}
                property={property}
                onSelect={selectProperty}
                isPremium={
                  property.plan && property.plan.type === 'premium-plan'
                }
                photo={
                  property.photos[0] &&
                  `${process.env.REACT_APP_STATIC}/images/${property.photos[0]}`
                }
              />
            ))}
          </div>
        )}
        {!isLoading && !properties.length && (
          <Typography>
            Não encontramos nenhum resultado para a sua pesquisa, utilize os
            filtros acima para procurar outros
          </Typography>
        )}
      </div>
    </HomePageTemplate>
  );
};
