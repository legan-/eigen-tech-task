import React from 'react';
import PropTypes from 'prop-types';

const Selection = ({ id, color, data, onSelectionRemove }) => (
  <div className='selection' onClick={ () => onSelectionRemove(id) }>
    <div className='header'>
      <span className={ `label c-${ color }` } />
      Selection { id + 1 }:
    </div>
    <div className='text'>
      { data }
    </div>
  </div>
);

Selection.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  onSelectionRemove: PropTypes.func.isRequired
};

export default Selection;