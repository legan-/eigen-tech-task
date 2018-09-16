import React, { Component } from 'react';

import Main from '~/src/components/Content/Main';
import Sidebar from '~/src/components/Content/Sidebar';
import api from '~/src/api';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      offsets: {},
      selection: {
        id: 0,
        color: 0
      },
      selections: {}
    };

    this.mouseUpListener = this.mouseUpListener.bind(this);
    this.onSelectionRemove = this.onSelectionRemove.bind(this);
  }

  mouseUpListener() {
    const selection = window.getSelection ? window.getSelection() : document.selection.createRange();
    const string = selection.toString();

    if (string.length) {
      this._savePosition(string);
      this._saveSelection(string);
      this._changeColor();
    }

    if (selection.empty) {
      selection.empty();
    } else if (selection.removeAllRanges) {
      selection.removeAllRanges();
    }
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

  _findSelection(string) {
    const length = string.length;

    const regexp = new RegExp(string.modify(), 'g');
    const start = this.state.text.modify().search(regexp);
    const end = start + length;

    return {
      start,
      end
    };
  }

  _savePosition(string) {
    const pos = this._findSelection(string);

    this.setState(state => {

      const { offsets, selection } = state;
      const { color } = selection;

      const offsetObj = (offset, isStart) => {
        const colors = offsets[offset] !== undefined ? [...offsets[offset].colors, color] : [color];

        return {
          [offset]: {
            index: offset,
            colors, 
            isStart
          }
        };
      };

      return {
        offsets: Object.assign({}, offsets, offsetObj(pos.start, true), offsetObj(pos.end, false))
      };
    });
  }

  _saveSelection(string) {
    const pos = this._findSelection(string);
    const offsets = Object.values(pos);

    this.setState(state => {
      const { selection, selections } = state;
      const { id, color } = selection;

      const obj = {
        id,
        color,
        text: string,
        offsets,
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
    const { selections, offsets } = this.state;

    const offsetIds = selections[i].offsets;

    delete selections[i];
    delete offsets[offsetIds[0]];
    delete offsets[offsetIds[1]];

    this.setState({
      selections,
      offsets
    });
  }

  componentDidMount() {
    const text = api.text().replace(/\n+/gi, ' ');

    this.setState({
      text
    });
  }

  render() {
    const { text, offsets, selections, selection } = this.state;
    const selectionsArray = Object.values(selections);

    return (
      <div className='content container'>
        <Main
          text={ text }
          offsets={ offsets }
          color={ selection.color }
          mouseUpListener={ this.mouseUpListener }
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
