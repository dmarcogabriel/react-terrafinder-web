import { isArray, isFinite } from 'lodash';

export const moneyFormat = (value, cents = true, hideCurrency = false) => {
  const moneyNumber =
    typeof value === 'string' ? Number.parseFloat(value) : value;

  if (!isFinite(moneyNumber)) {
    throw new Error('moneyFormat expect a finite number as first param');
  }

  let formatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(moneyNumber);

  if (!cents) formatted = formatted.replace(/,(\d{2})/g, '');
  if (hideCurrency) formatted = formatted.substr(3);

  return formatted;
};

export const farmingFormat = (farming) => {
  if (isArray(farming)) {
    const slicedFarming = farming.slice(0, 2);
    return slicedFarming.join(' / ');
  }
  return '';
};
