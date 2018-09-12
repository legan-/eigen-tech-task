import React, { Component } from 'react';

import { splitText } from '~/src/helpers';

import Main from '~/src/components/Content/Main';
import Sidebar from '~/src/components/Content/Sidebar';
import text from './text';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      text: {
        header: '',
        body: [] 
      },
      selects: []
    };
  }

  componentDidMount() {
    const { header, body } = splitText(text);

    this.setState(state => ({
      text: {
        ...state.text,
        header,
        body
      }
    }));
  }

  render() {
    const { text, selects } = this.state;

    return (
      <div className='content container'>
        <Main { ...text } />
        <Sidebar selects={ selects } />
      </div>
    );
  }
}

export default Content;
