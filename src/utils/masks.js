export const maskNumber = (value) => value.replace(/\D/g, '');

export const maskCpf = (value) => {
  return maskNumber(value)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2');
};

export const maskPhone = (value) => {
  return maskNumber(value)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

export const maskCep = (value) => {
  return maskNumber(value).replace(/(\d{5})(\d)/, '$1-$2');
};

export const maskCardNumber = (value) => {
  return maskNumber(value)
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2');
};

export const maskShortDate = (value) => {
  return maskNumber(value)
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2');
};

export const maskMoney = (value) => {
  let formated = `${value}`;
  formated = parseInt(formated.replace(/[\D]+/g, ''), 10);
  formated += '';
  formated = formated.replace(/([0-9]{2})$/g, ',$1');

  if (formated.length > 6) {
    formated = formated.replace(/([0-9])([0-9]{3}),([0-9]{2}$)/g, '$1.$2,$3');
  }

  if (formated.length > 9) {
    formated = formated.replace(
      /([0-9])([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g,
      '$1.$2.$3,$4'
    );
  }

  if (formated === 'NaN') formated = '';
  return formated;
};
