import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  describe('component', () => {
    const wrapper = shallow(<Footer />);

    it('should have "footer" tag', () => {
      expect(wrapper.type()).toBe('footer');
    });
  });
});
