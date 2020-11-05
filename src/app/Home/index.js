import React from 'react';
import backgroundImage from './background.jpg';
import cardImg from './product.jpg';
import Header from './Header';
import SearchProperties from './SearchProperties';
import Product from './Product';
import classes from './Home.module.scss';
import Features from './Features';

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

      {/* <div>
        <div>
          <h1>Conheça nosso planos de anúncio</h1>
          <h2>Escolha o que melhor se encaixa para você</h2>
        </div>

        <div>
          <div>
            <div>
              <p>Grátis</p>
            </div>

            <div>
              <p>Básico</p>

              <ul>
                <li>Duração de 7 dias</li>
                <li>Duração de 7 dias</li>
                <li>Duração de 7 dias</li>
                <li>Duração de 7 dias</li>
              </ul>

              <button type="button">Quero esse</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <footer className="footer">
        <div className="content">
          <div className="session">
            <p className="name">Terrafinder</p>
          </div>

          <div className="session">
            <p className="title">Institucional</p>

            <ul>
              <li>Página Inicial</li>
              <li>Quem somos</li>
              <li>Política de privacidade</li>
              <li>Fale Conosco</li>
            </ul>
          </div>

          <div className="session">
            <p className="title">Funcionalidades</p>

            <ul>
              <li>Quero anunciar meu imóvel</li>
              <li>Quero comprar um imóvel</li>
              <li>Preços e planos</li>
            </ul>
          </div>

          <div className="session">
            <p className="title">Fique por dentro das novidades!</p>

            <p className="text">
              Se inscreva em nossa newsletter para receber os anúncios com os
              melhores preços!
            </p>

            <form>
              <input type="email" name="email" />
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>

        <p>Copyright C 2020 Terrafinder. Todos os direitos reservados.</p>
      </footer> */}
    </>
  );
}
