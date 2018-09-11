import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  describe('component', () => {
    const wrapper = shallow(<App />);
    const wrapperClassName = 'wrapper';

    it(`should have "${ wrapperClassName }" class name`, () => {
      expect(wrapper.hasClass(wrapperClassName)).toBe(true);
    });
  });
});
