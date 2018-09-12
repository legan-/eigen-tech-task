import expect from 'expect';

import { splitText } from './index';

describe('Helper', () => {
  describe('parseText', () => {
    const text = `
      Header

      Paragraph 1.

      Paragraph 2. String 1.
      Paragraph 2. String 2.
      Paragraph 2. String 3.

      Paragraph 3.
    `;

    const splittedText = splitText(text);

    it('should should have header and body', () => {
      expect(Object.keys(splittedText)).toEqual(['header', 'body']);
    });

    it('should split text correctly', () => {
      const { body } = splittedText;
      expect(body.length).toBe(3);
    });

    it('should have header tag', () => {
      const { header } = splittedText;
      expect(header).toContain('Header');
    });

    it('should have paragraph tag', () => {
      const { body } = splittedText;
      expect(body[body.length - 1]).toContain('Paragraph 3');
    });    
  });
});