import chai from "chai";
import divide from "../src/divide.js";
const expect = chai.expect;

// NOTE: divide-function is incorrect, it divides the divisor with itself instead of using the divident

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(divide(6, 4)).to.equal(1.5);
  });

  it("divides a positive number by a negative number", () => {
    expect(divide(6, -3)).to.equal(-2);
  });

  it("divides two negative numbers", () => {
    expect(divide(-6, -3)).to.equal(2);
  });

  it("returns NaN when dividing by zero", () => {
    expect(divide(6, 0)).to.be.NaN;
  });

  it("returns Infinity when dividing a non-zero number by 0", () => {
    expect(divide(1, 0)).to.equal(Infinity);
  });

  it("returns 0 when 0 is divided by any non-zero number", () => {
    expect(divide(0, 5)).to.equal(0);
  });
});
