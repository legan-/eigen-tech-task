export const date = {
  year: () => new Date().getFullYear()
};

export const splitText = text => {
  const initial = {
    header: '',
    body: []
  };

  const splitted = text.split('\n\n');

  splitted.forEach((str, i) => {
    if (i === 0) {
      // eslint-disable-next-line no-console

      initial.header = str;
    } else {
      initial.body.push(str);
    }
  });

  return initial;
};