export const splitText = text => {
  const initial = {
    h1: '',
    p: ''
  };

  const obj = (text, id) => ({
    text,
    offsets: {}
  });

  const splitted = text.split('\n\n');

  initial.h1 = splitted[0];

  splitted.splice(0, 1);

  initial.p = splitted.join('\n\n');

  return initial;
};