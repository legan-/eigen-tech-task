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
      color: 'c-1',
      selection: {
        text: '',
        element: {
          index: '',
          tag: ''
        },
        position: {
          top: 0,
          left: 0,
        },
        offset: {
          anchor: 0,
          focus: 0
        }
      },
      selections: []
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
    // this.initSelection(selection);
    this.addSelection(selection);
    // this.showControls();
  }

  addSelection() {
    /* eslint-disable-next-line no-console */
    console.log('selection');
  }

  // initSelection() {
  //   const text = selection.toString();
  //   const parent = selection.anchorNode.parentNode;

  //   const tag = parent.localName;

  //   const index = tag === 'h1' ? -1 : parent.attributes.index.value;
  //   const anchor = selection.anchorOffset;
  //   const focus = selection.focusOffset;
  //   const top = parent.offsetTop;
  //   const left = parent.offsetLeft;

  //   this.setState(state => ({
  //     selection: {
  //       ...state.selection,
  //       text,
  //       element: {
  //         index,
  //         tag
  //       },
  //       position: {
  //         top,
  //         left
  //       },
  //       offset: {
  //         anchor,
  //         focus
  //       }
  //     }
  //   }));
  // }

  showControls() {
    this.setState({
      isControlsActive: true
    });
  }

  hideControls() {
    this.setState(state => ({
      isControlsActive: false,
      selection: {
        ...state.selection,
        text: '',
        element: {
          index: '',
          tag: ''
        },
        position: {
          top: 0,
          left: 0
        },
        offset: {
          anchor: 0,
          focus: 0
        }
      }
    }));
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
    const { text, selections, color, isControlsActive } = this.state;

    return (
      <div className='content container'>
        { isControlsActive && <Controls onBackgroundClick={ this.hideControls } /> }
        <Main { ...text } color={ color } mouseListener={ this.mouseListener } />
        <Sidebar selections={ selections } />
      </div>
    );
  }
}

export default Content;
