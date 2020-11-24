export const message = (ownerName, propertyName) => {
  if (!ownerName) return null;
  if (!propertyName) return null;

  return `Olá, ${ownerName}! Estou interessado na sua propriedade chamada ${propertyName}!
  Qual a melhor forma de pagamento?`;
};
