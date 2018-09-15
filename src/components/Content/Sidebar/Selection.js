import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../Paragraph';

const Selection = ({ id, color, text, onSelectionRemove }) => (
  <div className='selection' onClick={ () => onSelectionRemove(id) }>
    <div className='header'>
      <span className={ `label color-${ color }` } />
      Selection { id + 1 }:
    </div>
    <div className='text'>
      <Paragraph id={ id } type={ 'p' } text={ text } />
    </div>
  </div>
);

Selection.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onSelectionRemove: PropTypes.func.isRequired
};

export default Selection;