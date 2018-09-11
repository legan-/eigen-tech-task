import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  describe('component', () => {
    const wrapper = shallow(<Header />);
    const wrapperClassName = 'header';

    it(`should have "${ wrapperClassName }" tag`, () => {
      expect(wrapper.type()).toBe('header');
    });
  });
});
