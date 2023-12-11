import chai from "chai";
import toNumber from "../src/toNumber.js";
const expect = chai.expect;

describe("toNumber", function () {
  describe("Positive tests", function () {
    it("should return the number for number inputs", function () {
      expect(toNumber(3.2)).to.equal(3.2);
      expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
      expect(toNumber(Infinity)).to.equal(Infinity);
    });

    it("should preserve the sign of -0", function () {
      expect(Object.is(toNumber(-0), -0)).to.be.true;
    });

    it("should return 0 for positive 0", function () {
      expect(toNumber(0)).to.equal(0);
    });

    it("should convert true to 1", function () {
      expect(toNumber(true)).to.equal(1);
    });

    it("should convert false to 0", function () {
      expect(toNumber(false)).to.equal(0);
    });

    it("should return NaN for undefined", function () {
      expect(toNumber(undefined)).to.be.NaN;
    });

    it("should return the number for string inputs", function () {
      expect(toNumber("3.2")).to.equal(3.2);
    });

    it("should convert binary strings to numbers", function () {
      expect(toNumber("0b1010")).to.equal(10);
    });

    it("should convert octal strings to numbers", function () {
      expect(toNumber("0o12")).to.equal(10);
    });

    it("should convert regular numeric strings to numbers", function () {
      expect(toNumber("10")).to.equal(10);
    });

    it("should return the number for object inputs with valueOf method", function () {
      expect(toNumber({ valueOf: () => 3 })).to.equal(3);
    });

    // this test fails
    it("should return NaN for null", function () {
      expect(toNumber(null)).to.be.NaN;
    });
  });

  describe("Negative tests", function () {
    it("should return NaN for symbol inputs", function () {
      expect(toNumber(Symbol("symbol"))).to.be.NaN;
    });

    it("should return NaN for object inputs", function () {
      expect(toNumber({})).to.be.NaN;
    });

    it("should return NaN for bad hexadecimal strings", function () {
      expect(toNumber("0xG")).to.be.NaN;
    });

    it("should return NaN for objects without a valueOf method", function () {
      expect(toNumber({})).to.be.NaN;
    });
  });
});
