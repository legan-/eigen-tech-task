import React, { Component } from 'react';

import { splitText } from '~/src/helpers';

import Main from '~/src/components/Content/Main';
import Sidebar from '~/src/components/Content/Sidebar';
import text from './text';

class Content extends Component {
  render() {
    return (
      <div className='content container'>
        <Main text={ splitText(text) } />
        <Sidebar />
      </div>
    );
  }
}

export default Content;
