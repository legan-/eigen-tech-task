import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Controls from './Controls';

Enzyme.configure({ adapter: new Adapter() });

describe('Controls', () => {
  describe('component', () => {
    const component = shallow(<Controls />);
    const componentClassName = 'controls';

    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    it('should have two buttons', () => {
      expect(component.render().find('.bar').children('button')).toHaveLength(2);
    });  
  });
});
