
import chai from 'chai';
import toNumber from '../src/toNumber.js';
const expect = chai.expect;

describe('toNumber', function() {
  describe('Positive tests', function() {
    it('should return the number for number inputs', function() {
      expect(toNumber(3.2)).to.equal(3.2);
      expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
      expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it('should return the number for string inputs', function() {
      expect(toNumber('3.2')).to.equal(3.2);
    });
  });

  describe('Negative tests', function() {
    it('should return NaN for symbol inputs', function() {
      expect(toNumber(Symbol('symbol'))).to.be.NaN;
    });

    it('should return NaN for object inputs', function() {
      expect(toNumber({})).to.be.NaN;
    });

    it('should return the number for object inputs with valueOf method', function() {
      expect(toNumber({valueOf: () => 3})).to.equal(3);
    });
  });
});
