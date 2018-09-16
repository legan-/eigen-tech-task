import expect from 'expect';

import { Format } from './App';

describe('Helpers', () => {
  describe('Format class', () => {
    const props = {
      text: 'Very long sentence 1. Very long sentence 2.',
      offsets: {
        5: {
          index: 5,
          colors: [0],
          isStart: true
        },
        9: {
          index: 9,
          colors: [0],
          isStart: false            
        }
      }
    };
    const format = new Format(props.text, props.offsets);
    const formatted = format.run();

    it('result should be splitted into 3 parts', () => {
      expect(formatted).toHaveLength(3);
    });

    it('should have no formatting for the 1st element', () => {
      expect(formatted[0]).toContain('Very');
    });

    it('should have no formatting for the 3rd element', () => {
      expect(formatted[2]).toContain('Very long sentence 2');
    });
  });
});
