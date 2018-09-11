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
    it('should split text correctly', () => {
      expect(splittedText).toHaveLength(4);
    });
  });
});