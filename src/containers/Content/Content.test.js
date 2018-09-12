import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
// import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './Content';

Enzyme.configure({ adapter: new Adapter() });

describe('Content', () => {
  describe('component', () => {
    const component = shallow(<Content />);
    const componentClassName = 'content';

    const state = {
      text: {
        header: 'Header',
        body: [
          'Paragraph 1.', 'Paragraph 2. String 1.\nParagraph 2. String 2.\nParagraph 2. String 3.', 'Paragraph 3.'
        ]
      },
      selects: [],
    };

    it(`should have "${ componentClassName }" class name`, () => {
      expect(component.hasClass(componentClassName)).toBe(true);
    });

    it('should display header correctly', () => {
      component.setState(state);

      const h1 = component.find('Main').shallow().find('h1');

      expect(h1.text()).toMatch(state.text.header);
    });

    it('should display text correctly', () => {
      component.setState(state);

      const ps = component.find('Main').shallow().find('.text').children('p');

      expect(ps).toHaveLength(state.text.body.length);
      expect(ps.at(0).text()).toMatch(state.text.body[0]);
      expect(ps.at(1).text()).toMatch(state.text.body[1]);
      expect(ps.at(2).text()).toMatch(state.text.body[2]);
    });
  });
});
