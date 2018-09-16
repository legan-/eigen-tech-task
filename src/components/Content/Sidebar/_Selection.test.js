import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Selection from './_Selection';

Enzyme.configure({ adapter: new Adapter() });

describe('Selection', () => {
  describe('component', () => {
    const props = {
      id: 1,
      color: 1,
      text: 'Text 1',
      onSelectionRemove: () => {}
    };
    const component = shallow(<Selection { ...props } />);
    const componentClassName = 'selection';

    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    it('should have correct header', () => {
      expect(component.find('.header').text()).toBe(`Selection ${ props.id + 1 }:`);
    });

    it('should display correct color label', () => {
      expect(component.find('.label').hasClass(`color-${ props.color }`)).toBe(true);
    });

    it('should display correct text in "p" tag', () => {
      expect(component.find('.text p').text()).toBe(props.text);
    });
  });
});
