import { isArray, isFinite } from 'lodash';

export const moneyFormat = (value, cents = true) => {
  const moneyNumber =
    typeof value === 'string' ? Number.parseFloat(value) : value;

  if (!isFinite(moneyNumber)) {
    throw new Error('moneyFormat expect a finite number as first param');
  }

  const formatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(moneyNumber);

  return cents ? formatted : formatted.substring(0, formatted.indexOf(','));
};

export const farmingFormat = (farming) => {
  if (isArray(farming)) {
    return farming.join(' / ');
  }
  return '';
};
