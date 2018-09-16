import expect from 'expect';

describe('Helpers', () => {
  describe('modify function', () => {
    it('should replace () with <>', () => {
      expect('(String)'.modify()).toMatch('<String>');
    });
  });
});
