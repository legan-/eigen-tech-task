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
      selection: {
        id: 0,
        color: 0,
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
      selections: {}
    };

    this.mouseListener = this.mouseListener.bind(this);
    this.onSelectionRemove = this.onSelectionRemove.bind(this);
    // this.hideControls = this.hideControls.bind(this);
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

  addSelection(selection) {
    const data = selection.toString();

    this.setState(state => {
      const { selection, selections } = state;
      const { id, color } = selection;

      const obj = {
        id,
        color,
        data,
      };

      const newId = id + 1;
      const newColor = color + 1;

      return {
        selection: {
          ...selection,
          id: newId,
          color: newColor >= 20 ? newColor - 20 : newColor,
        },
        selections: Object.assign(selections, { [id]: obj })
      };
    });
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

  onSelectionRemove(i) {
    const obj = this.state.selections;
    delete obj[i];
    /* eslint-disable-next-line no-console */
    console.log(obj);

    this.setState({
      selections: obj
    });
  }

  // showControls() {
  //   this.setState({
  //     isControlsActive: true
  //   });
  // }

  // hideControls() {
  //   this.setState(state => ({
  //     isControlsActive: false,
  //     selection: {
  //       ...state.selection,
  //       text: '',
  //       element: {
  //         index: '',
  //         tag: ''
  //       },
  //       position: {
  //         top: 0,
  //         left: 0
  //       },
  //       offset: {
  //         anchor: 0,
  //         focus: 0
  //       }
  //     }
  //   }));
  // }

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
    const { text, selections, selection, isControlsActive } = this.state;
    const selectionsArray = Object.values(selections);

    return (
      <div className='content container'>
        { /* isControlsActive && <Controls onBackgroundClick={ this.hideControls } /> */ }
        <Main { ...text } color={ selection.color } mouseListener={ this.mouseListener } />
        <Sidebar selections={ selectionsArray } onSelectionRemove={ this.onSelectionRemove } />
      </div>
    );
  }
}

export default Content;
