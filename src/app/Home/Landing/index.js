import React from 'react';
import Filters from 'common/components/Filters';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { HomePageTemplate } from 'common/components';
import { Box } from '@mui/material';
import classes from './Landing.module.scss';
import Features from './components/Features';
import { Product } from './components/Product';
import PRODUCT_CARDS from './productCards';
import { Plans } from '../components';

export const Landing = () => {
  const history = useHistory();

  const goPropertiesListWithFilters = (e) => {
    history.push(`/search-property?${queryString.stringify(e)}`);
  };

  return (
    <HomePageTemplate>
      <div className={classes.background}>
        <div className={classes.content}>
          <h1 className={classes.title}>
            Encontre a propriedade ideal para você!
          </h1>

          <Filters
            onSubmit={goPropertiesListWithFilters}
            className={classes.filters}
          />
        </div>
      </div>

      <div className={classes.session}>
        <h2 className={classes.subtitle}>O que você precisa?</h2>

        <Box
          sx={{
            px: 3,
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'space-between',
          }}
        >
          {PRODUCT_CARDS.map((product, i) => (
            <Product key={String(i)} product={product} />
          ))}
        </Box>
      </div>

      <Features />

      <Plans />
    </HomePageTemplate>
  );
};
