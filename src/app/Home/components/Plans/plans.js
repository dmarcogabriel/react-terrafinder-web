export default [
  {
    id: 'p1',
    amount: 'Grátis',
    kind: 'Básico',
    color: 'lime-green',
    bgColor: 'lime-green',
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
    amount: 'R$ 50',
    plan: 'por anúncio',
    kind: 'PREMIUM',
    color: 'yellow',
    bgColor: 'yellow',
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
    color: 'pink',
    bgColor: 'blue',
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
        included: false,
      },
      {
        id: 'f4',
        name: 'Suporte exclusivo',
        included: false,
      },
    ],
  },
];
