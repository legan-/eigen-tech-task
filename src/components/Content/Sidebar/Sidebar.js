import React from 'react';
import PropTypes from 'prop-types';

import Selection from './Selection';

const Sidebar = ({ selections, onSelectionRemove }) => (
  <div className='sidebar'>
    <div className='header'>
      User selections:
    </div>
    {
      selections.map((s, i) => <Selection key={ i } { ...s } onSelectionRemove={ onSelectionRemove } />)
    }
  </div>
);

Sidebar.propTypes = {
  selections: PropTypes.array.isRequired,
  onSelectionRemove: PropTypes.func.isRequired,
};

export default Sidebar;