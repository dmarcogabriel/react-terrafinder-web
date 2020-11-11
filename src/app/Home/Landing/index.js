import React from 'react';
import {
  background,
  content,
  title,
  session,
  products,
  subtitle,
} from './Landing.module.scss';
import { SearchProperties, Product, Plans, Features } from './components';
import productImg from './static/product.jpg';

const CARDS = Array.from(Array(4));

export default function Landing() {
  return (
    <>
      <div className={background}>
        <div className={content}>
          <h1 className={title}>Encontre a propriedade ideal para você!</h1>

          <SearchProperties />
        </div>
      </div>

      <div className={session}>
        <h2 className={subtitle}>O que você precisa?</h2>

        <div className={products}>
          {CARDS.map((_, i) => (
            <Product key={String(i)} image={productImg} />
          ))}
        </div>
      </div>

      <Features />

      <Plans />
    </>
  );
}
