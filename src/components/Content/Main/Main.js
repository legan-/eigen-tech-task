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
      h1.map(data => <Paragraph key={ data.id } type={ 'h1' } { ...data } />)
    }
    <div className={ 'text' }>
      {
        p.map(data => <Paragraph key={ data.id } type={ 'p' } { ...data } />)
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