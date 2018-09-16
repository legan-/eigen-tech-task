import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Sidebar from './Sidebar';

Enzyme.configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  describe('component', () => {
    const props = {
      selections: [
        {
          id: 0,
          color: 0,
          text: 'Text 0'
        },
        {
          id: 1,
          color: 1,
          text: 'Text 1'
        }
      ],
      onSelectionRemove: () => {}
    };
    const component = shallow(<Sidebar { ...props } />);
    const componentClassName = 'sidebar';


    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    const selectionLength = props.selections.length;

    it(`should display ${ selectionLength } selections`, () => {
      expect(component.find('Selection')).toHaveLength(selectionLength);
    });
  });
});
