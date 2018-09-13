import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../Paragraph';

const Main = ({ header, body, color, mouseUpListener, mouseDownListener }) => (
  <div
    className={ `main color-${ color }` }
    onMouseUp={ () => mouseUpListener() }
    onMouseDown={ () => mouseDownListener() }
  >
    <h1>{ header }</h1>
    <div className={ 'text' }>
      {
        body.map((text, i) => <Paragraph key={ i } index={ i } text={ text } />)
      }
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