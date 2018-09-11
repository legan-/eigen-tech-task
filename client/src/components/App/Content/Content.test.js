import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './Content';

Enzyme.configure({ adapter: new Adapter() });

describe('Content', () => {
  describe('component', () => {
    const wrapper = shallow(<Content />);
    const wrapperClassName = 'content';

    it(`should have "${ wrapperClassName }" class name`, () => {
      expect(wrapper.hasClass(wrapperClassName)).toBe(true);
    });
  });
});
