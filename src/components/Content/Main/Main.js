import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ text }) => (
  <div className='main'>
    <div className='text'>
      { text.map((s, i) => i === 0 ? <h1 key={ i }>{ s }</h1> : <p key={ i } >{ s }</p> ) }
    </div>
  </div>
);

Main.propTypes = {
  text: PropTypes.array
};

export default Main;