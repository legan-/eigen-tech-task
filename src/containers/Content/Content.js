import React from 'react';

import { splitText } from '~/src/helpers';

import Main from '~/src/components/Content/Main';
import Sidebar from '~/src/components/Content/Sidebar';
import text from './text';

/* eslint-disable no-console */

const Content = () => (
  <div className='content container'>
    <Main text={ splitText(text) } />
    <Sidebar />
  </div>
);

export default Content;