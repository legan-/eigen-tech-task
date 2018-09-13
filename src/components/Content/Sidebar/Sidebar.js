import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';

const Sidebar = ({ selections }) => (
  <div className='sidebar'>
    User selections:
    { selections.map((s, i) => <Select key={ i } index={ i } />) }
  </div>
);

Sidebar.propTypes = {
  selections: PropTypes.array.isRequired,
};

export default Sidebar;