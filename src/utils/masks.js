export const maskCpf = (value) => {
  const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  return value.replace(regex, '$1.$2.$3-$4');
};

export const maskPhone = (value) => {
  const regex = /(\d{2})(\d{5})(\d{4})/;
  return value.replace(regex, '($1) $2-$3');
};
