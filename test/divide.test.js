import chai from "chai";
import divide from "../src/divide.js";
const expect = chai.expect;

describe("Divide", () => {
  it("divide a positive number with a positive number", () => {
    expect(divide(6, 2)).to.equal(3);
  });
});
