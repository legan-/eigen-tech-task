import React, { Component } from 'react';

import { splitText } from '~/src/helpers';

import Controls from '~/src/components/Content/Controls';
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
      isControlsActive: false,
      selects: []
    };

    this.mouseListener = this.mouseListener.bind(this);
    this.hideControls = this.hideControls.bind(this);
  }

  mouseListener() {
    const selection = window.getSelection();
    const selectionLength = selection.toString().length;
    const { anchorNode, focusNode } = selection;

    if (selectionLength && anchorNode === focusNode) {
      this.onTextSelected(selection);
    }
  }

  onTextSelected(selection) {
    /* eslint-disable-next-line no-console */
    console.log('show top up', selection.toString());

    this.showControls();
  }

  showControls() {
    this.setState({
      isControlsActive: true
    });
  }

  hideControls() {
    this.setState({
      isControlsActive: false
    });
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
    const { text, selects, isControlsActive } = this.state;

    return (
      <div className='content container'>
        { isControlsActive && <Controls onBackgroundClick={ this.hideControls } /> }
        <Main { ...text } mouseListener={ this.mouseListener } />
        <Sidebar selects={ selects } />
      </div>
    );
  }
}

export default Content;
