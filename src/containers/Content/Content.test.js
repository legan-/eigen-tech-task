import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './Content';
import api from '~/src/api';

Enzyme.configure({ adapter: new Adapter() });

describe('Content', () => {
  describe('component', () => {
    const component = shallow(<Content />);
    const componentClassName = 'content';

    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    it('should display text correctly', () => {
      expect(component.render().text()).toContain(api.text().split('\n\n')[0]);
    });
  });
});
