export const validateFile = (file) => {
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
  ];

  if (validTypes.indexOf(file.type) === -1) {
    return false;
  }
  return true;
};

export const validateArrayOfInputs = (inputs) => {
  const validInputs = inputs.filter((input) => input.value);

  if (!validInputs.length) return false;
  return true;
};
