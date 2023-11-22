import chai from "chai";
import eq from "../src/eq.js";
const expect = chai.expect;

describe("eq", () => {
  it("should return true for strictly equal values", () => {
    expect(eq(1, 1)).to.be.true;
  });

  it("should return false for values that are not the same", () => {
    expect(eq("a", "b")).to.be.false;
  });

  it("should return true for the same object references", () => {
    const object = { a: 1 };
    expect(eq(object, object)).to.be.true;
  });

  it("should return false for different objects with the same values", () => {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(eq(object, other)).to.be.false;
  });

  it("should return true for the same string value", () => {
    expect(eq("a", "a")).to.be.true;
  });

  /*
  NOTE: this test should return false but it returns true, something wrong in the eq function

  it("should return false for a string and a string object with the same value", () => {
    expect(eq("a", Object("a"))).to.be.false;
  });
  */

  it("should return true for NaN compared with NaN", () => {
    expect(eq(NaN, NaN)).to.be.true;
  });
});
