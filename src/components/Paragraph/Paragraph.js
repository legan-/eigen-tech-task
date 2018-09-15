import React from 'react';
import PropTypes from 'prop-types';

import { cutStr } from '~/src/helpers';

const Paragraph = ({ id, type, text, offsets = {} }) => {
  const parsedText = Object.keys(offsets).length ? cutStr(text, offsets) : text;

  return type === 'h1' ? 
    <h1 index={ id }>{ parsedText }</h1> :
    <p index={ id }>{ parsedText }</p>;
};

Paragraph.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  offsets: PropTypes.object
};

export default Paragraph;