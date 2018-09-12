import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ header = '', body = [] }) => (
  <div className='main'>
    <h1>{ header }</h1>
    <div className='text'>
      { body.map((s, i) => <p key={ i } >{ s }</p> ) }
    </div>
  </div>
);

Main.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired
};

export default Main;