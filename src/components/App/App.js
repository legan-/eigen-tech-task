import React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../Header';
import Content from '~/src/containers/Content';
import Footer from '../Footer';

const App = () => (
  <div className='wrapper'>
    <Header />
    <Content />
    <Footer />
  </div>
);

export default hot(module)(App);