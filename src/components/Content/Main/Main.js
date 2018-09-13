import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ header, body, color, mouseUpListener, mouseDownListener }) => (
  <div
    className={ `main color-${ color }` }
    onMouseUp={ () => mouseUpListener() }
    onMouseDown={ () => mouseDownListener() }
  >
    <h1>{ header }</h1>
    <div className={ 'text' }>
      { body.map((s, i) => <p key={ i } index={ i }>{ s }</p> ) }
    </div>
  </div>
);

Main.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  color: PropTypes.number.isRequired,
  mouseUpListener: PropTypes.func.isRequired,
  mouseDownListener: PropTypes.func.isRequired,
};

export default Main;