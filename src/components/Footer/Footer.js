import React from 'react';

import { date } from '~/src/helpers';
import config from '~/config';

const Footer = () => (
  <footer className='container'>
    { `©${ date().year } - ${ config.name }` }
  </footer>
);

export default Footer;