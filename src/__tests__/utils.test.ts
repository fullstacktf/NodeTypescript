import { assertIsNumber } from '../utils';

describe('utils', () => {
  describe('assertIsNumber', () => {
    it('given a number it should return a number', () => {
      expect(assertIsNumber('123')).toBe(123);
    });

    it('given a decimal number it should return this number', () => {
      expect(assertIsNumber('123.01')).toBe(123.01);
    });

    it('given an zero it should return a zero', () => {
      expect(assertIsNumber('0')).toBe(0);
    });

    it('given a number string with characters it should throw an error', () => {
      expect(() => assertIsNumber('1222e')).toThrowError();
    });

    it('given an empty string it should throw an error', () => {
      expect(() => assertIsNumber('')).toThrowError();
    });

    it('given a bad number as string it should throw an error', () => {
      expect(() => assertIsNumber('bad_number')).toThrowError();
    });
  });
});
