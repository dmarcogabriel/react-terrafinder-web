import React, { useState } from 'react';
import {
  Menu as MenuIcon,
  PhoneInTalkOutlined as PhoneIcon,
} from '@material-ui/icons';
import backgroundImage from '../static/background-banner3.jpg';
import cardImg from '../static/arrendamento.jpg';
import logo from '../static/logo_terrafinder.png';
import Select from '../common/Select';
import benefitsBg from '../static/benefits-background.jpg';

const CARDS = Array.from(Array(4));

const FARM_KINDS = [
  {
    key: 'farm',
    name: 'Fazenda',
  },
];

const Home = () => {
  const [propertyKind, setPropertyKind] = useState();

  return (
    <>
      <header className="fixed z-50 top-0 left-0 bg-white right-0 shadow flex justify-between py-3 px-4 items-center">
        <img alt="logo" src={logo} className="h-16" />

        <a href="/#" className="text-lg">
          Procurar Imóvel
        </a>
        <a href="/#" className="text-lg">
          Quero anunciar meu imóvel
        </a>
        <a href="/#" className="text-lg">
          Como funciona?
        </a>

        <button
          type="button"
          className="flex flex-col bg-primary text-white py-1 md:px-4 rounded-sm shadow-lg"
        >
          <p className="invisible">ligue para nós!</p>

          <div className="flex justify-center">
            <PhoneIcon />

            <p className="invisible">+55 (14) 99999-9999</p>
          </div>
        </button>
      </header>

      <div
        className="w-full h-screen bg-cover bg-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-center justify-between h-full py-40">
          <h1 className="text-3xl text-white mb-auto text-shadow">
            Encontre a propriedade ideal para você!
          </h1>

          <div className="rounded-sm shadow bg-white flex flex-row">
            <Select
              id="propertyKind"
              label="Tipo de Propriedade"
              options={FARM_KINDS}
              value={propertyKind}
              onChange={setPropertyKind}
            />
            <Select label="Área do Imóvel" options={FARM_KINDS} />
            <Select label="Estado" options={FARM_KINDS} />
            <Select label="Intervalo de Preço" options={FARM_KINDS} />

            <button
              type="button"
              className="bg-primary text-white h-full rounded-r-sm px-5 text-base"
            >
              Procurar Imóvel
            </button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl text-black my-10 text-center font-bold">
          O que você precisa?
        </h1>

        <div className="flex flex-row">
          {CARDS.map((_, i) => (
            <div
              key={String(i)}
              className="relative m-5 mb-10 shadow-lg rounded-sm"
            >
              <img src={cardImg} className="w-full rounded-sm" alt="test" />

              <div className="flex flex-col items-center py-4">
                <p className="font-bold text-base mb-2">
                  Anunciar imóvel rural
                </p>

                <p className="mx-3 text-sm">
                  Quero criar um anúncio para vender minha fazenda, chácara ou
                  sítio.
                </p>
              </div>

              <button
                type="button"
                className="absolute py-3 px-4 right-0 left-0 mx-auto shadow-xl bg-primary text-white rounded-r-sm text-base"
              >
                Anunciar
              </button>
            </div>
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

          <button type="button">Quero anunciar meu imóvel</button>
          <button type="button">Quero achar uma propriedade</button>
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
