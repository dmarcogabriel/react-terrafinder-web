export const moneyFormat = (value, cents = true) => {
  const formatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return cents ? formatted : formatted.substring(0, formatted.indexOf(','));
};

export const farmingFormat = (farming) => farming.join(' / ');
