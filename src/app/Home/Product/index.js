import React from 'react';
import './styles.scss';

export default function Product({ image, key }) {
  return (
    <div className="container" key={key}>
      <img className="productImage" src={image} alt="test" />

      <div className="content">
        <p className="title">Anunciar imóvel rural</p>

        <p className="text">
          Quero criar um anúncio para vender minha fazenda, chácara ou sítio.
        </p>
      </div>

      <button className="actionButton" type="button">
        Anunciar
      </button>
    </div>
  );
}
