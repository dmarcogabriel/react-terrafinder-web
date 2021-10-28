import React, { useEffect, useState } from 'react';
import Property from 'common/components/Property';
import { useHistory, useLocation } from 'react-router-dom';
import api from 'services/api';
import queryString from 'query-string';
import Filters from 'common/components/Filters';
import classes from './SearchProperty.module.scss';
import { PageTemplate } from '../components';

export const SearchProperty = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [properties, setProperties] = useState([]);

  const selectProperty = (id) => {
    history.push(`/property/${id}`);
  };

  const loadProperties = async (queryParams = null) => {
    const { data: res } = await api.get(`properties${queryParams || search}`);

    setProperties(res.data.properties);
  };

  const cleanFilters = () => {};

  const handleFilter = async (e) => {
    await loadProperties(`?${queryString.stringify(e)}`);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <PageTemplate>
      <div className={classes.container}>
        <h1>Use os filtros abaixo para melhorar o resultado de sua busca</h1>

        <div className={classes.filtersCard}>
          <Filters onSubmit={handleFilter} className={classes.filters} />

          <button
            type="button"
            className={classes.buttonLinkKind}
            onClick={cleanFilters}
          >
            Limpar Filtro
          </button>
        </div>
        {/* 
        //todo: add loading here
      */}
        <div className={classes.propertiesList}>
          {properties.map((property, i) => (
            <Property
              i={i}
              key={property._id}
              property={property}
              onSelect={selectProperty}
            />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};
