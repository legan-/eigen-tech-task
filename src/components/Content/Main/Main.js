import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ text }) => (
  <div className='main'>
    <div className='text'>
      { text }
    </div>
  </div>
);

Main.propTypes = {
  text: PropTypes.string.isRequired
};

export default Main;