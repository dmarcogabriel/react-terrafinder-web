import { buyImg, proImg, sellImg } from './static';

export default [
  {
    id: 'p1',
    image: sellImg,
    title: 'Anunciar Imóvel Rural',
    description:
      'Quero criar um anúncio para vender minha fazenda, chácara ou sítio.',
    buttonText: 'Anunciar',
    link: '/create-property',
  },
  {
    id: 'p2',
    image: buyImg,
    title: 'Comprar Imóvel Rural',
    description: 'Tenho interesse em comprar um Imóvel rural.',
    buttonText: 'Comprar',
    link: '/search-property',
  },
  // {
  //   id: 'p3',
  //   title: 'Arrendamento',
  //   description: 'Procurar arrendar minha terra(s) para produzir.',
  //   buttonText: 'Arrendar',
  //   image: rentImg,
  //   link: '/create/property',
  // },
  {
    id: 'p4',
    image: proImg,
    title: 'Anúncio Profissional',
    description:
      'Quero contratar o serviço de criação de aunúncio profissional.',
    buttonText: 'Virar Pro',
    link: 'login/register',
  },
];
