import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';

const Sidebar = ({ selects = [] }) => (
  <div className='sidebar'>
    User selections:
    { selects.map((s, i) => <Select key={ i } index={ i } />) }
  </div>
);

Sidebar.propTypes = {
  selects: PropTypes.array.isRequired,
};

export default Sidebar;