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

    it('should split text correctly', () => {
      const { p } = splittedText;
      const paragraphs = Object.values(p);
      expect(paragraphs).toHaveLength(3);
    });

    it('should have just one header', () => {
      const { h1 } = splittedText;
      const header = Object.values(h1);
      expect(header).toHaveLength(1);
    });

    it('should have "h1" data', () => {
      const { h1 } = splittedText;
      const header = Object.values(h1);
      expect(header[0].text).toMatch('Header');
    });

    it('should have "p" data', () => {
      const { p } = splittedText;
      const paragraphs = Object.values(p);
      expect(paragraphs[paragraphs.length - 1].id).toBe(3);
      expect(paragraphs[paragraphs.length - 1].text).toMatch('Paragraph 3');
    });    
  });
});