import React from 'react';
import cardImg from './static/product.jpg';
import Header from './components/Header';
import SearchProperties from './components/SearchProperties';
import Product from './components/Product';
import classes from './Home.module.scss';
import Features from './components/Features';
import Plans from './components/Plans';
import Footer from './components/Footer';

const CARDS = Array.from(Array(4));

export default function Home() {
  return (
    <>
      <Header />

      <div className={classes.background}>
        <div className={classes.content}>
          <h1 className={classes.title}>
            Encontre a propriedade ideal para você!
          </h1>

          <SearchProperties />
        </div>
      </div>

      <div className={classes.session}>
        <h2 className={classes.subtitle}>O que você precisa?</h2>

        <div className={classes.products}>
          {CARDS.map((_, i) => (
            <Product key={String(i)} image={cardImg} />
          ))}
        </div>
      </div>

      <Features />

      <Plans />

      <Footer />
    </>
  );
}
