import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ index, text }) => (
  <p index={ index }>
    {
      text.split('\n').map((str, i) => <span key={ i }>{ str }<br /></span>)
    }
  </p>
);

Paragraph.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Paragraph;