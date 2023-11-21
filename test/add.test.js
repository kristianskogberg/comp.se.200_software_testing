import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("Add", () => {
  it("adds a positive number to a positive number", () => {
    expect(add(3, 6)).to.equal(9);
  });
});