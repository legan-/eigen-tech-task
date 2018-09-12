import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ index }) => (
  <div className='select'>
    Select { index + 1 }
  </div>
);

Select.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Select;