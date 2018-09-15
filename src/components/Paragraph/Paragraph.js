import React from 'react';
import PropTypes from 'prop-types';

import { cutStr } from '~/src/helpers';

const Paragraph = ({ type, text, offsets = {}, id }) => {
  // const parsedText = Object.keys(offsets).length ? cutStr(text, offsets) : text;

  const format = (x, key) => {
    const formatted = x.split('\n').map((s, i) => <span key={ i }>{ s }<br /></span>);
    return type === 'h1' ? <h1 key={ key }>{ formatted }</h1> : <p key={ key }>{ formatted }</p>
  };

  return text.split('\n\n').map((p, i) => format(p, i));
};

Paragraph.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  offsets: PropTypes.object,
  id: PropTypes.number,
};

export default Paragraph;