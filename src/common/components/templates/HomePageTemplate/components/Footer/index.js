import React from 'react';
import { Link } from 'react-router-dom';
import {
  container,
  content,
  brand,
  title,
  text,
  session,
  copyWright,
} from './Footer.module.scss';
import RegisterEmail from './RegisterEmail';

export const Footer = () => (
  <footer className={container}>
    <hr />

    <div className={content}>
      <div className={session}>
        <p className={brand}>Terrafinder</p>
      </div>

      <div className={session}>
        <p className={title}>Institucional</p>

        <ul>
          <li className={text}>
            <Link to="/">Página Inicial</Link>
          </li>
          <li className={text}>
            <Link to="/about">Quem somos</Link>
          </li>
          <li className={text}>
            <Link to="/privacy-policy">Política de privacidade</Link>
          </li>
          <li className={text}>
            <Link to="/support">Fale Conosco</Link>
          </li>
        </ul>
      </div>

      <div className={session}>
        <p className={title}>Funcionalidades</p>

        <ul>
          <li className={text}>
            <Link to="/login">Quero anunciar meu imóvel</Link>
          </li>
          <li className={text}>
            <Link to="/search-property">Quero comprar um imóvel</Link>
          </li>
          <li className={text}>
            <Link to="/home">Preços e planos</Link>
          </li>
        </ul>
      </div>

      <div className={session}>
        <p className={title}>Fique por dentro das novidades!</p>

        <p className={text}>
          Se inscreva em nossa newsletter para receber os anúncios com os
          melhores preços!
        </p>

        <RegisterEmail />
      </div>
    </div>

    <hr />

    <p className={copyWright}>
      Copyright C 2020 Terrafinder. Todos os direitos reservados.
    </p>
  </footer>
);
