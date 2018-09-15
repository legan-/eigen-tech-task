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
      <Paragraph type={ 'h1' } { ...h1 } />
    }
    <div className={ 'text' }>
      <Paragraph type={ 'p' } { ...p } />
    </div>
  </div>
);


Main.propTypes = {
  h1: PropTypes.shape({
    text: PropTypes.string.isRequired,
    offsets: PropTypes.object.isRequired
  }).isRequired,
  p: PropTypes.shape({
    text: PropTypes.string.isRequired,
    offsets: PropTypes.object.isRequired
  }).isRequired,
  color: PropTypes.number.isRequired,
  mouseUpListener: PropTypes.func.isRequired,
  mouseDownListener: PropTypes.func.isRequired,
};

export default Main;