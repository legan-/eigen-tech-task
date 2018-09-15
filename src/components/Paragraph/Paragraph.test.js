import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Paragraph from './Paragraph';

Enzyme.configure({ adapter: new Adapter() });

describe('Paragraph', () => {
  describe('component', () => {
    const props = {
      id: 0,
      text: 'String 1.\nString 2.\nString 3.',
    };

    const component = shallow(<Paragraph { ...props } />);

    it('should have "p" tag', () => {
      expect(component.type()).toBe('p');
    });

    it('should have index in attributes', () => {
      expect(component.prop('id')).toBe(props.index);
    });

    it('should be splitted to strings', () => {
      expect(component.children()).toHaveLength(3);
    });

    it('should render <br /> elements', () => {
      expect(component.render().find('br')).toHaveLength(3);
    });

    it('should display text', () => {
      expect(component.render().text()).toBe(props.text.split('\n').join(''));
    });
  });
});
