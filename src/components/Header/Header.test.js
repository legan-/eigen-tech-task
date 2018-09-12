import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  describe('component', () => {
    const component = shallow(<Header />);
    const componentClassName = 'header';

    it(`should have "${ componentClassName }" tag`, () => {
      expect(component.type()).toBe('header');
    });
  });
});
