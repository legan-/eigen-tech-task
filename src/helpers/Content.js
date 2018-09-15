export const splitText = text => {
  const initial = {
    h1: {},
    p: {}
  };

  const obj = (text, id) => ({
    id,
    text,
    offsets: {}
  });

  const splitted = text.split('\n\n');

  splitted.forEach((text, i) => {
    const base = i === 0 ? initial.h1 : initial.p;

    Object.assign(base, { [i]: obj(text, i) });
  });

  return initial;
};