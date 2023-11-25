import chai from 'chai';
import toString from '../src/toString.js';
const expect = chai.expect;

// the testing fails cuz the js will return 0 for null and undefined will return "undefined",so the test will fail

describe('toString', function() {
  it('should return the string for string inputs', function() {
    expect(toString('abc')).to.equal('abc');
  });

  it('should return the string for number inputs', function() {
    expect(toString(123)).to.equal('123');
    expect(toString(-0)).to.equal('-0');
  });

  it('should return the string for array inputs', function() {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });

  it('should return an empty string for null and undefined inputs', function() {
    expect(toString(null)).to.equal('');
    expect(toString(undefined)).to.equal('');
  });

  it('should return the string for symbol inputs', function() {
    const symbol = Symbol('symbol');
    expect(toString(symbol)).to.equal(symbol.toString());
  });
});

