import { purple } from '@mui/material/colors';

export const PLANS = [
  {
    id: 'p1',
    amount: 'Grátis',
    kind: 'Básico',
    color: '#32cd8b',
    bgColor: '#32cd8b',
    link: '/',
    features: [
      {
        id: 'f1',
        name: 'Duração de 7 dias',
        included: true,
      },
      {
        id: 'f2',
        name: 'Até 15 fotos',
        included: true,
      },
      {
        id: 'f3',
        name: 'Sem demarcação do imóvel no mapa',
        included: false,
      },
      {
        id: 'f4',
        name: 'Sem suporte',
        included: false,
      },
    ],
  },
  {
    id: 'p2',
    amount: 'R$ 129,00',
    plan: 'por anúncio',
    kind: 'PREMIUM',
    color: '#cd8632',
    bgColor: '#cd8632',
    link: '/',
    features: [
      {
        id: 'f1',
        name: 'Duração do anúncio de 90 dias',
        included: true,
      },
      {
        id: 'f2',
        name: 'Visibilidade aumentada na plataforma',
        included: true,
      },
      {
        id: 'f3',
        name: 'Até 30 fotos e 1 vídeo',
        included: true,
      },
      {
        id: 'f4',
        name: 'Sem filmagens por drone nem tratamento de fotos',
        included: false,
      },
    ],
  },
  {
    id: 'p3',
    amount: 'A definir',
    plan: 'Faça uma cotação com nossos especialistas',
    kind: 'Profissional',
    color: purple[300],
    bgColor: ' #3279cd',
    link: '/contact-us',
    features: [
      {
        id: 'f1',
        name: 'Duração de até 365 dias',
        included: true,
      },
      {
        id: 'f2',
        name: 'Maior visibilidade da plataforma',
        included: true,
      },
      {
        id: 'f3',
        name: 'Gravação da propriedade com drones e tratamento de imagens',
        included: true,
      },
      {
        id: 'f4',
        name: 'Suporte exclusivo',
        included: true,
      },
    ],
  },
];
