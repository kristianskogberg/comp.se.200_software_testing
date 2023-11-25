import chai from 'chai';
import isArrayLike from '../src/isArrayLike.js';
const expect = chai.expect;

describe('isArrayLike', function() {
  describe('Array-like values', function() {
    it('should return true for arrays', function() {
      expect(isArrayLike([1, 2, 3])).to.be.true;
    });

    it('should return true for strings', function() {
      expect(isArrayLike('abc')).to.be.true;
    });

    it('should return true for objects with length property and indexed elements', function() {
      expect(isArrayLike({length: 5, 0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e'})).to.be.true;
    });
  });

  describe('Non-array-like values', function() {
    it('should return false for functions', function() {
      expect(isArrayLike(Function)).to.be.false;
    });

    it('should return false for plain objects', function() {
      expect(isArrayLike({})).to.be.false;
    });

    it('should return false for numbers', function() {
      expect(isArrayLike(123)).to.be.false;
    });

    it('should return false for null', function() {
      expect(isArrayLike(null)).to.be.false;
    });

    it('should return false for undefined', function() {
      expect(isArrayLike(undefined)).to.be.false;
    });
  });
});
