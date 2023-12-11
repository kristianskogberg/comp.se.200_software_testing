import chai from "chai";
import filter from "../src/filter.js";
const expect = chai.expect;
// filter cannot return an empty array like "[]", but "[[]]" instead, cuz the result being initialized as [[]].

describe("filter", function () {
  it("should return an array of numbers greater than 10", function () {
    const numbers = [5, 10, 15, 20];

    const result = filter(numbers, (num) => num > 10);

    expect(result).to.deep.equal([15, 20]);
  });

  it("should return an empty array when input is empty", function () {
    expect(filter([], (value) => value)).to.deep.equal([]);
  });

  it("should return an empty array when the array is null", function () {
    expect(filter(null, (value) => value)).to.deep.equal([]);
  });

  it("should return an empty array when all elements do not pass the predicate", function () {
    const numbers = [1, 2, 3, 4, 5];

    const result = filter(numbers, (num) => num > 5);

    expect(result).to.deep.equal([]);
  });
});
