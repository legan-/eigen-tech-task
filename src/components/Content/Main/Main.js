import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ header = '', body = [], mouseListener }) => (
  <div className='main' onMouseUp={ () => mouseListener() }>
    <h1>{ header }</h1>
    <div className='text'>
      { body.map((s, i) => <p key={ i } index={ i }>{ s }</p> ) }
    </div>
  </div>
);

Main.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  mouseListener: PropTypes.func.isRequired,
};

export default Main;