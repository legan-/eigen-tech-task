import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './Main';

Enzyme.configure({ adapter: new Adapter() });

describe('Main', () => {
  describe('component', () => {
    const component = shallow(<Main />);
    const componentClassName = 'main';

    it(`should have "${ componentClassName }" tag`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });
  });
});
