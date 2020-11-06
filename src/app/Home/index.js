import React from 'react';
import backgroundImage from './background.jpg';
import cardImg from './product.jpg';
import Header from './Header';
import SearchProperties from './SearchProperties';
import Product from './Product';
import classes from './Home.module.scss';
import Features from './Features';
import Plans from './Plans';
import Footer from './Footer';

const CARDS = Array.from(Array(4));

export default function Home() {
  return (
    <>
      <Header />

      <div
        className={classes.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
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
