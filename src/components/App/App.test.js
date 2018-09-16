import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  describe('component', () => {
    const component = shallow(<App />);
    const componentClassName = 'wrapper';

    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    it('should have Header, Content and Footer blocks', () => {
      expect(component.find('Header').exists()).toBe(true);
      expect(component.find('Content').exists()).toBe(true);
      expect(component.find('Footer').exists()).toBe(true);
    });
  });
});
