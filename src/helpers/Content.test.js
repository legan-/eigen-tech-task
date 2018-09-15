import expect from 'expect';

import { splitText } from './Content';

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

    it('should should have "h1" and "p" keys', () => {
      expect(Object.keys(splittedText)).toEqual(['h1', 'p']);
    });

    it('should have "h1" data', () => {
      const { h1 } = splittedText;
      expect(h1).toContain('Header');
    });

    it('should have "p" data', () => {
      const { p } = splittedText;
      expect(p).toContain('Paragraph 3');
    });    
  });
});