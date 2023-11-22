import chai from "chai";
import divide from "../src/divide.js";
const expect = chai.expect;

// NOTE: divide-function is incorrect, it divides the divisor with itself instead of using the divident

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(divide(6, 3)).to.equal(2);
  });

  it("divides two negative numbers", () => {
    expect(divide(-4, -2)).to.equal(2);
  });

  it("divides a positive number with a negative number", () => {
    expect(divide(10, -5)).to.equal(-2);
  });

  it("converts string arguments to numbers before division", () => {
    expect(divide("12", "4")).to.equal(3);
  });

  it("returns default value when both arguments are undefined", () => {
    expect(divide(undefined, undefined)).to.equal(1); // Assuming default value is 1
  });

  it("returns the first argument when second argument is undefined", () => {
    expect(divide(6, undefined)).to.equal(6);
  });

  it("returns the second argument when first argument is undefined", () => {
    expect(divide(undefined, 3)).to.equal(3);
  });

  it("handles division by zero", () => {
    expect(divide(6, 0)).to.be.NaN;
  });

  it("returns NaN when dividing non-coercible strings", () => {
    expect(divide("a", "b")).to.be.NaN;
  });
});
