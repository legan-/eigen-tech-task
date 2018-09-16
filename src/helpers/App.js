import React from 'react';

export const date = () => ({
  year: new Date().getFullYear()
});

export class Format {
  constructor(text, offsets = {}) {
    this.offsets = offsets;
    this.text = text;
    this.keys = this._keys();

    this.props = {
      colors: [],
      selections: []
    };
  }

  _keys() {
    return [...Object.keys(this.offsets).map(o => parseInt(o))];
  }

  run() {
    if (this.keys[0] !== 0) this.keys.unshift(0);
    return this.keys.map(this._actions());
  }

  _actions() {
    return (k, i) => {
      const s = this._split(k, i);
      const d = this._define(s);
      
      return this._highlight(d, i);
    };
  }

  _split(curr, i) {
    const next = this.keys[i + 1];
    const isLast = next === undefined;

    const output = isLast ? this.text.substring(curr) : this.text.substring(curr, next);

    return {
      index: curr,
      text: output
    };
  }

  _define(x) {
    const { index, text } = x;
    const offset = this.offsets[index];
    const isUndefined = offset === undefined;

    if (isUndefined) {
      return {
        text,
        isHighlighted: false,
        colors: []
      };
    } else {

      const localColors = offset.colors;

      if (offset.isStart) {
        this.props.colors.push(...localColors);
      } else {

        localColors.forEach(c => {
          const i = this.props.colors.indexOf(c);
          if (i !== -1) this.props.colors.splice(i, 1);
        });
      }

      return {
        text,
        isHighlighted: !!this.props.colors.length,
        colors: [...this.props.colors]
      };
    }
  }

  _highlight(x, i) {
    const colors = () => x.colors.length > 1 ? 'color-x' : `color-${ x.colors[0] }`;
    return x.isHighlighted ? <span key={ i } className={ colors() }>{ x.text }</span> : x.text;
  }
}