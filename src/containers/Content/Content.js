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
      data: {
        h1: {},
        p: {}
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
      this._markText(selection);
      this._saveSelection(selection);
    }

    // if (selection.empty) {
    //   selection.empty();
    // } else if (selection.removeAllRanges) {
    //   selection.removeAllRanges();
    // }
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

  _markText(selection) {
    const { anchorNode, focusNode, anchorOffset, focusOffset } = selection;

    const findParent = parent => {
      let x = parent;
      while (x !== null && (x.localName !== 'p' && x.localName !== 'h1')) {
        x = x.parentNode;
      }
      return x;
    };

    const setObj = x => {
      const { attributes, localName } = x;
      const index = parseInt(attributes.index.value);

      return {
        tag: localName,
        index
      };
    };

    const anchorWrapper = findParent(anchorNode);
    const focusWrapper = findParent(focusNode);

    const anchor = setObj(anchorWrapper);
    const focus = setObj(focusWrapper);

    if (anchor.tag === focus.tag && anchor.index === focus.index) {

      const { tag, index } = anchor;

      this.setState(state => {
        const { data, selection } = state;
        const curOffsets = data[tag][index].offsets;

        const offsetObj = offset => ({
          [offset]: {
            index: anchorOffset,
            selectionId: curOffsets[anchorOffset] !== undefined ? [...curOffsets[anchorOffset].selectionId, selection.id] : [selection.id],
            color: curOffsets[anchorOffset] !== undefined ? [...curOffsets[anchorOffset].color, selection.color] : [selection.color],
          }
        });

        const offsets = Object.assign({}, curOffsets, offsetObj(anchorOffset), offsetObj(focusOffset));

        return {
          data: {
            ...data,
            [tag]: {
              ...data[tag],
              [index]: {
                ...data[tag][index],
                offsets
              }
            }
          }
        };
      });
    }
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
    const data = splitText(text);

    this.setState({
      data
    });
  }

  render() {
    const { data, selections, selection } = this.state;
    const selectionsArray = Object.values(selections);
    const { h1, p } = data;
    const h1Array = Object.values(h1);
    const pArray = Object.values(p);

    return (
      <div className='content container'>
        <Main
          h1={ h1Array }
          p={ pArray }
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
