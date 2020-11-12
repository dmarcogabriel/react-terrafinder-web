export const parseSearch = (search = '?data=1&step2=3&step3=4') => {
  const splited = search.replace('?', '').split('&');

  const searchObjects = splited.map((el) => {
    const [key, value] = el.split('=');

    return { [key]: value };
  });

  return searchObjects.reduce((prev, curr) => ({ ...prev, ...curr }));
};
