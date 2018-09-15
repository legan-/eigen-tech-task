import React from 'react';

export const cutStr = (str, offsets) => {
  const offsetKeys = Object.keys(offsets);
  const offsetIntKeys = offsetKeys.map(o => parseInt(o));

  const offsetIntKeysWithZero = [...offsetIntKeys];
  if (offsetIntKeysWithZero[0] !== 0) offsetIntKeysWithZero.unshift(0);

  return offsetIntKeysWithZero
    .map((offset, i) => splitStr(str, offsetIntKeysWithZero, offset, i))
    .map((substring, i) => rebuildStr(offsets, offsetIntKeysWithZero[i], substring, i));
};

const splitStr = (str, offsetKeys, offset, i) => {
  const nextOffset = offsetKeys[i + 1];
  const isLast = nextOffset === undefined;

  if (isLast) {
    return str.substring(offset);
  } else {
    return str.substring(offset, nextOffset);
  }
};

const rebuildStr = (offsets, currentKey, substring, i) => {
  const offset = offsets[currentKey];
  if (offset !== undefined && offset.isAnchor) {
    const colors = offset.colors.map(c => `color-${ c }`).join(' ');
    return <span key={ i } className={ colors }>{ substring }</span>;
  } else {
    return substring;
  }
};