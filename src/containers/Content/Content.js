import React, { Component } from 'react';

import { splitText } from '~/src/helpers';

// import Controls from '~/src/components/Content/Controls';
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
      selection: {
        id: 0,
        color: 0
      },
      selections: {}
    };

    this.mouseUpListener = this.mouseUpListener.bind(this);
    this.mouseDownListener = this.mouseDownListener.bind(this);
    this.onSelectionRemove = this.onSelectionRemove.bind(this);
  }

  mouseUpListener() {
    const selection = window.getSelection ? window.getSelection() : document.selection.createRange();
    const selectionLength = selection.toString().length;

    if (selectionLength) {
      this._saveSelection(selection);
    }

    if (selection.empty) {
      selection.empty();
    } else if (selection.removeAllRanges) {
      selection.removeAllRanges();
    }
  }

  mouseDownListener() {
    this._changeColor();
  }

  _changeColor() {
    this.setState(state => {
      const { color } = state.selection;

      const newColor = color + 1;

      return {
        selection: {
          ...state.selection,
          color: newColor >= 20 ? newColor - 20 : newColor,
        }
      };
    });
  }

  _saveSelection(selection) {
    const text = selection.toString();

    this.setState(state => {
      const { selection, selections } = state;
      const { id, color } = selection;

      const obj = {
        id,
        color,
        text,
      };

      const newId = id + 1;

      return {
        selection: {
          ...selection,
          id: newId,
        },
        selections: Object.assign(selections, { [id]: obj })
      };
    });
  }

  onSelectionRemove(i) {
    const obj = this.state.selections;
    delete obj[i];
    this.setState({
      selections: obj
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
    const { text, selections, selection } = this.state;
    const selectionsArray = Object.values(selections);

    return (
      <div className='content container'>
        <Main
          { ...text }
          color={ selection.color }
          mouseUpListener={ this.mouseUpListener }
          mouseDownListener={ this.mouseDownListener }
        />
        <Sidebar
          selections={ selectionsArray }
          onSelectionRemove={ this.onSelectionRemove }
        />
      </div>
    );
  }
}

export default Content;
