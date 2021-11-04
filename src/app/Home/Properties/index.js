import React, { useEffect, useState } from 'react';
import Property from 'common/components/Property';
import { useHistory, useLocation } from 'react-router-dom';
import api from 'services/api';
import queryString from 'query-string';
import Filters from 'common/components/Filters';
import { HomePageTemplate } from 'common/components';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material';
import { ExpandMore as ExpandIcon } from '@mui/icons-material';
import classes from './SearchProperty.module.scss';

export const Properties = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [properties, setProperties] = useState([]);

  const selectProperty = (id) => {
    history.push(`/property/${id}`);
  };

  const loadProperties = async (queryParams = null) => {
    const isActiveParam = `isActive=true`;
    let query = `?${isActiveParam}`;
    if (queryParams) query += `&${queryParams}`;
    else if (search) query += `&${search}`;

    const { data: res } = await api.get(`properties${query}`);

    setProperties(res.data.properties);
  };

  const handleCleanFilters = () => {
    // todo: add clean filters
  };

  const handleFilter = async (e) => {
    await loadProperties(`${queryString.stringify(e)}`);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <HomePageTemplate>
      <div className={classes.container}>
        <h1>Use os filtros abaixo para melhorar o resultado de sua busca</h1>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandIcon />}>
            <Typography>Filtros</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Filters onSubmit={handleFilter} />
            <Button fullWidth onClick={handleCleanFilters}>
              Limpar Filtros
            </Button>
          </AccordionDetails>
        </Accordion>

        {/* 
        //todo: add loading here
      */}
        <div className={classes.propertiesList}>
          {properties.map((property) => (
            <Property
              key={property._id}
              property={property}
              onSelect={selectProperty}
            />
          ))}
        </div>
      </div>
    </HomePageTemplate>
  );
};
