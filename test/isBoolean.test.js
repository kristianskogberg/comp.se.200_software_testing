import chai from 'chai';
import isBoolean from '../src/isBoolean.js';
const expect = chai.expect;

describe('isBoolean', function() {
  describe('Boolean primitives', function() {
    it('should return true for true', function() {
      expect(isBoolean(true)).to.be.true;
    });

    it('should return true for false', function() {
      expect(isBoolean(false)).to.be.true;
    });
  });

  describe('Boolean objects', function() {
    it('should return true for new Boolean(true)', function() {
      expect(isBoolean(new Boolean(true))).to.be.true;
    });

    it('should return true for new Boolean(false)', function() {
      expect(isBoolean(new Boolean(false))).to.be.true;
    });
  });

  describe('Non-boolean values', function() {
    it('should return false for null', function() {
      expect(isBoolean(null)).to.be.false;
    });

    it('should return false for undefined', function() {
      expect(isBoolean(undefined)).to.be.false;
    });

    it('should return false for number', function() {
      expect(isBoolean(0)).to.be.false;
    });

    it('should return false for string', function() {
      expect(isBoolean('')).to.be.false;
    });

    it('should return false for array', function() {
      expect(isBoolean([])).to.be.false;
    });

    it('should return false for object', function() {
      expect(isBoolean({})).to.be.false;
    });
  });
});
