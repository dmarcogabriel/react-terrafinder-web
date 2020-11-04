import React from 'react';
import backgroundImage from '../../static/background-banner3.jpg';
import cardImg from '../../static/arrendamento.jpg';
import benefitsBg from '../../static/benefits-background.jpg';
import Button from '../../common/Button';
import Header from './Header';
import SearchProperties from './SearchProperties';
import Product from './Product';
import './styles.scss';

const CARDS = Array.from(Array(4));

const Home = () => {
  return (
    <>
      <Header />

      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="content">
          <h1 className="title">Encontre a propriedade ideal para você!</h1>

          <SearchProperties />
        </div>
      </div>

      <div className="session">
        <h2 className="subtitle">O que você precisa?</h2>

        <div className="products">
          {CARDS.map((_, i) => (
            <Product key={String(i)} image={cardImg} />
          ))}
        </div>
      </div>

      <div
        className="w-full h-screen bg-cover bg-white py-10"
        style={{ backgroundImage: `url(${benefitsBg})` }}
      >
        <h1 className="text-center text-3xl font-bold mb-5">
          Funcionalidades e Benefícios do Terrafinder
        </h1>

        <div>
          <p>
            Você que quer vender seu imóvel rural, encontrou o lugar ideal para
            anuncia-lo. É simples, rápido e eficiente.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt quisquam accusantium accusamus aliquid laborum nam quasi
            earum quaerat voluptate ratione cumque tempora minima, nihil sequi.
            Culpa, ut ad? At?
          </p>

          <Button>Quero anunciar meu imóvel</Button>
          <Button>Quero achar uma propriedade</Button>
        </div>

        <div>
          <div>
            <p>Pague apenas pelo tempo do seu anúncio</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius
              eum praesentium quos delectus vero commodi ipsum molestiae quod
              vel nostrum rerum alias minima explicabo dignissimos, iste tempora
              nulla perferendis.
            </p>
          </div>

          <div>
            <p>Pague apenas pelo tempo do seu anúncio</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius
              eum praesentium quos delectus vero commodi ipsum molestiae quod
              vel nostrum rerum alias minima explicabo dignissimos, iste tempora
              nulla perferendis.
            </p>
          </div>

          <div>
            <p>Pague apenas pelo tempo do seu anúncio</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius
              eum praesentium quos delectus vero commodi ipsum molestiae quod
              vel nostrum rerum alias minima explicabo dignissimos, iste tempora
              nulla perferendis.
            </p>
          </div>
        </div>
      </div>

      <div>
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
      </div>

      <footer className="footer">
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
      </footer>
    </>
  );
};

export default Home;
