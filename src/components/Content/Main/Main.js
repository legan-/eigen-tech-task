import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../../Paragraph';

const Main = ({ h1, p, color, mouseUpListener, mouseDownListener }) => (
  <div
    className={ `main color-${ color }` }
    onMouseUp={ () => mouseUpListener() }
    onMouseDown={ () => mouseDownListener() }
  >
    {
      h1.map(({ id, text }) => <h1 key={ id } index={ id }>{ text }</h1>)
    }
    <div className={ 'text' }>
      {
        p.map(({ id, text }) => <Paragraph key={ id } index={ id } text={ text } />)
      }
    </div>
  </div>
);


Main.propTypes = {
  h1: PropTypes.array.isRequired,
  p: PropTypes.array.isRequired,
  color: PropTypes.number.isRequired,
  mouseUpListener: PropTypes.func.isRequired,
  mouseDownListener: PropTypes.func.isRequired,
};

export default Main;