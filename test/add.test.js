import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("add with number inputs", () => {
  it("adds two positive numbers", () => {
    expect(add(6, 4)).to.equal(10);
  });

  it("adds two negative numbers", () => {
    expect(add(-2, -2)).to.equal(-4);
  });

  it("adds a positive number and a negative number", () => {
    expect(add(5, -3)).to.equal(2);
  });

  it("adds a number to zero", () => {
    expect(add(5, 0)).to.equal(5);
  });

  it("adds zero to a number", () => {
    expect(add(0, 5)).to.equal(5);
  });

  it("adds two zeros", () => {
    expect(add(0, 0)).to.equal(0);
  });

  it("adds floating point numbers", () => {
    expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
  });
});

describe("add with non-number inputs", () => {
  /* When dealing with non-number inputs, the add function should either
  throw an error or coerce the inputs to numbers, depending on its intended behavior
  */

  /*
  it("adds a number and a string representation of a number", () => {
    expect(add(5, "2")).to.equal(7);
  });

  it("returns NaN when adding a number and a non-numeric string", () => {
    expect(add(5, "abc")).to.be.NaN;
  });

  it("returns NaN when adding two non-numeric strings", () => {
    expect(add("abc", "def")).to.be.NaN;
  });

  it("returns NaN when adding a number and undefined", () => {
    expect(add(1, undefined)).to.be.NaN;
  });

  it("adds a number and an array with one numeric element", () => {
    expect(add(1, [2])).to.equal(3);
  });
  */

  it("returns NaN when adding a number and an array with non-numeric element", () => {
    expect(add(1, ["a"])).to.be.NaN;
  });

  it("returns NaN when adding a number and an object", () => {
    expect(add(1, {})).to.be.NaN;
  });

  it("returns NaN when adding a number and null", () => {
    expect(add(1, null)).to.equal(1); // Assuming null is coerced to 0
  });
});
