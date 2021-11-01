import { AccessTime, TrackChanges, SupportAgent } from '@mui/icons-material';

export const CARDS_CONTENT = [
  {
    key: 'c1',
    IconComponent: AccessTime,
    colors: {
      icon: '#eee',
      bg: '#62ac43',
      text: '#eee',
    },
    title: 'Pague apenas pelo tempo do seu anúncio',
    text:
      'Para anunciar na plataforma, selecione o plano de anúncio que melhor se encaixa para você e pague apenas pelo tempo em que ele ficar publicado.',
  },
  {
    key: 'c2',
    colors: {
      icon: '#62ac43',
      bg: '#eee',
      text: '#000',
    },
    IconComponent: TrackChanges,
    title: 'Quero um anúncio profissional',
    text:
      'Nós oferecemos um serviço que profissionaliza o seu anúncio. Temos uma equipe que pode ir até seu imóvel, fotografa-lo e gravar vídeos sensacionais com drones. Impossível não vender assim!',
  },
  {
    key: 'c3',
    colors: {
      icon: '#62ac43',
      bg: '#eee',
      text: '#000',
    },
    IconComponent: SupportAgent,
    title: 'Precisa de ajuda?',
    text:
      'Entre em contato através dos nossos canais de atendimento.\n\nWhatsApp: (14)99999-8888',
  },
];
