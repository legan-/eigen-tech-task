import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './Content';
import text from './text';

Enzyme.configure({ adapter: new Adapter() });

describe('Content', () => {
  describe('component', () => {
    const component = shallow(<Content />);
    const componentClassName = 'content';


    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    it('should display header correctly', () => {
      const h1 = component.render().find('h1');
      expect(h1.text()).toMatch(text.split('\n\n')[0]);
    });
  });
});
