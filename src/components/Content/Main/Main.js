import React from 'react';
import PropTypes from 'prop-types';

import { format } from '~/src/helpers';

const Main = ({ text, offsets, color, mouseUpListener }) => {

  // // const markedText = Object.keys(offsets).length ? cutStr(text, offsets) : text;
  // const markedAndCuttedText = cutStr(text, offsets);

  // // return text.split('\n\n').map((p, i) => format(p, i));
  // return markedAndCuttedText;

  const formattedText = text.split('\n\n').map(format).map((p, i) => <p key={ i }>{ p }</p>);
  const formattedHeader = formattedText.splice(0, 1);

  return (
    <div
      className={ `main color-${ color }` }
      onMouseUp={ () => mouseUpListener() }
    >
      <h1>{ formattedHeader }</h1>
      <div className={ 'text' }>
        { formattedText }
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