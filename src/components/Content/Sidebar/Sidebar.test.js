import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Sidebar from './Sidebar';

Enzyme.configure({ adapter: new Adapter() });

describe('Sidebar', () => {
  describe('component', () => {
    const wrapper = shallow(<Sidebar />);
    const wrapperClassName = 'sidebar';

    it(`should have "${ wrapperClassName }" tag`, () => {
      expect(wrapper.hasClass(wrapperClassName)).toBe(true);
    });
  });
});
