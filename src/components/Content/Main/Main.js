import React from 'react';
import PropTypes from 'prop-types';

import { Format } from '~/src/helpers';

const Main = ({ text, offsets, color, mouseUpListener }) => {

  const format = new Format(text, offsets);
  const formattedAndMarked = format.run();

  return (
    <div
      className={ `main color-${ color }` }
      onMouseUp={ () => mouseUpListener() }
    >
      <div className={ 'text' }>
        <p>{ formattedAndMarked }</p>
      </div>
    </div>
  );
};

Main.propTypes = {
  text: PropTypes.string.isRequired,
  offsets: PropTypes.object.isRequired,
  color: PropTypes.number.isRequired,
  mouseUpListener: PropTypes.func.isRequired,
};

export default Main;