import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(6, 4)).to.equal(10);
  });

  it("returns 0 when both arguments are undefined", () => {
    expect(add(undefined, undefined)).to.equal(0); // Default value is 0
  });

  it("returns the first argument when second argument is undefined", () => {
    expect(add(6, undefined)).to.equal(6);
  });

  it("returns the second argument when first argument is undefined", () => {
    expect(add(undefined, 4)).to.equal(4);
  });

  it("adds zero correctly", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("adds a number and null (assuming null is coerced to 0)", () => {
    expect(add(6, null)).to.equal(6);
  });

  it("returns NaN when adding a number and an object", () => {
    expect(add(6, {})).to.be.NaN;
  });

  it("converts string arguments to numbers before addition", () => {
    expect(add("6", "4")).to.equal(10);
  });

  it("handles addition with a string and a number", () => {
    expect(add("6", 4)).to.equal(10);
  });

  it("returns NaN when adding non-coercible strings", () => {
    expect(add("a", "b")).to.be.NaN;
  });

  it("adds a number and an empty string (assuming empty string is coerced to 0)", () => {
    expect(add(6, "")).to.equal(6);
  });
});
