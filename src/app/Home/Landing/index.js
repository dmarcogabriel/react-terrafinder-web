import React from 'react';
import Filters from 'common/components/Filters';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import classes from './Landing.module.scss';
import Features from './components/Features';
import Plans from './components/Plans';
import Product from './components/Product';
import productImg from './static/product.jpg';
import PRODUCT_CARDS from './productCards';
import { PageTemplate } from '../components';

export const Landing = () => {
  const history = useHistory();

  const goPropertiesListWithFilters = (e) => {
    history.push(`/search-property?${queryString.stringify(e)}`);
  };

  return (
    <PageTemplate>
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

        <div className={classes.products}>
          {PRODUCT_CARDS.map((product, i) => (
            <Product key={String(i)} product={product} image={productImg} />
          ))}
        </div>
      </div>

      <Features />

      <Plans />
    </PageTemplate>
  );
};
