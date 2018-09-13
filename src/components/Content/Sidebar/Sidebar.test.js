import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Sidebar from './Sidebar';

Enzyme.configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  describe('component', () => {
    const props = {
      selections: []
    };
    const component = shallow(<Sidebar { ...props } />);
    const componentClassName = 'sidebar';

    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });
  });
});
