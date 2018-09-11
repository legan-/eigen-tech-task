import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './Main';

Enzyme.configure({ adapter: new Adapter() });

describe('Main', () => {
  describe('component', () => {
    const wrapper = shallow(<Main />);
    const wrapperClassName = 'main';

    it(`should have "${ wrapperClassName }" tag`, () => {
      expect(wrapper.hasClass(wrapperClassName)).toBe(true);
    });
  });
});
