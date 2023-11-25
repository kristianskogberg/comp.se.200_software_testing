import chai from 'chai';
import isArrayLikeObject from '../src/isArrayLikeObject.js';
const expect = chai.expect;

describe('isArrayLikeObject', function() {
  describe('Array-like objects', function() {
    it('should return true for arrays', function() {
      expect(isArrayLikeObject([1, 2, 3])).to.be.true;
    });
  });

  describe('Non-array-like objects', function() {
    it('should return false for strings', function() {
      expect(isArrayLikeObject('abc')).to.be.false;
    });

    it('should return false for functions', function() {
      expect(isArrayLikeObject(Function)).to.be.false;
    });

    it('should return false for numbers', function() {
      expect(isArrayLikeObject(1)).to.be.false;
      expect(isArrayLikeObject(-1)).to.be.false;
      expect(isArrayLikeObject(0)).to.be.false;
      expect(isArrayLikeObject(NaN)).to.be.false;
      expect(isArrayLikeObject(Infinity)).to.be.false;
    });

    it('should return false for string values', function() {
      expect(isArrayLikeObject('true')).to.be.false;
      expect(isArrayLikeObject('false')).to.be.false;
      expect(isArrayLikeObject('')).to.be.false;
    });

    it('should return false for object values', function() {
      expect(isArrayLikeObject({ prop: true })).to.be.false;
      expect(isArrayLikeObject({ prop: false })).to.be.false;
    });

    it('should return false for null and undefined values', function() {
      expect(isArrayLikeObject(null)).to.be.false;
      expect(isArrayLikeObject(undefined)).to.be.false;
    });
  });
});
