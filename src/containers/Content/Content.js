import React from 'react';

import Main from '~/src/components/Content/Main';
import Sidebar from '~/src/components/Content/Sidebar';
import text from './text';

/* eslint-disable no-console */

const parsedText = text;

const Content = () => (
  <div className='content container'>
    <Main text={ parsedText } />
    <Sidebar />
  </div>
);

export default Content;