import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onBackgroundClick }) => (
  <div className='controls'>
    <div className='background' onClick={ () => onBackgroundClick() } />
    <div className='bar'>
      <button>Add</button>
      <button>Remove</button>
    </div>
  </div>
);

Controls.propTypes = {
  onBackgroundClick: PropTypes.func.isRequired
};

export default Controls;