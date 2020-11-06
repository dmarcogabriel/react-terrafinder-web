import React from 'react';
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

export default function Footer() {
  return (
    <footer className={container}>
      <hr />

      <div className={content}>
        <div className={session}>
          <p className={brand}>Terrafinder</p>
        </div>

        <div className={session}>
          <p className={title}>Institucional</p>

          <ul>
            <li className={text}>Página Inicial</li>
            <li className={text}>Quem somos</li>
            <li className={text}>Política de privacidade</li>
            <li className={text}>Fale Conosco</li>
          </ul>
        </div>

        <div className={session}>
          <p className={title}>Funcionalidades</p>

          <ul>
            <li className={text}>Quero anunciar meu imóvel</li>
            <li className={text}>Quero comprar um imóvel</li>
            <li className={text}>Preços e planos</li>
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
}
