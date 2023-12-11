import chai from "chai";
import toString from "../src/toString.js";
const expect = chai.expect;

describe("toString", function () {
  it("should return the string for string inputs", function () {
    expect(toString("abc")).to.equal("abc");
  });

  it("should return the string for number inputs", function () {
    expect(toString(123)).to.equal("123");
    expect(toString(-0)).to.equal("-0");
    expect(toString(0)).to.equal("0");
  });

  it("should return the string for array inputs", function () {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });

  it("should return the string for symbol inputs", function () {
    const symbol = Symbol("symbol");
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it("should correctly convert arrays with various elements", function () {
    const array = [1, "a", null, undefined, [2, "b", null], -0];
    const expectedString = "1,a,,,[2,b,],-0";
    expect(toString(array)).to.equal(expectedString);
  });
});
