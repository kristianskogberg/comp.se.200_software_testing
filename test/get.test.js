import chai from "chai";
import get from "../src/get.js";
const expect = chai.expect;

describe("get", () => {
  const object = { a: [{ b: { c: 3 } }], x: null, y: false };

  it("gets a nested property value using a dot path", () => {
    expect(get(object, "a[0].b.c")).to.equal(3);
  });

  it("gets a nested property value using an array path", () => {
    expect(get(object, ["a", "0", "b", "c"])).to.equal(3);
  });

  it("returns the default value when the path does not exist", () => {
    expect(get(object, "a.b.c", "default")).to.equal("default");
  });

  it("returns undefined if the path does not exist and no default value is set", () => {
    expect(get(object, "a.b.c")).to.be.undefined;
  });

  it("returns the default value when the object is null", () => {
    expect(get(null, "a.b.c", "default")).to.equal("default");
  });

  it("returns the default value when the object is undefined", () => {
    expect(get(undefined, "a.b.c", "default")).to.equal("default");
  });

  it("handles non-object types gracefully", () => {
    expect(get(false, "a.b.c", "default")).to.equal("default");
  });

  it("handles paths that lead to null values", () => {
    expect(get(object, "x")).to.be.null;
  });

  it("handles paths that lead to false values", () => {
    expect(get(object, "y")).to.be.false;
  });

  it("returns undefined for properties that exist but hold undefined values", () => {
    const objWithUndefined = { a: undefined };
    expect(get(objWithUndefined, "a")).to.be.undefined;
  });

  it("handles array paths that include actual dots in property names", () => {
    const objWithDots = { "a.b": { c: { "d.e": 4 } } };
    expect(get(objWithDots, ["a.b", "c", "d.e"])).to.equal(4);
  });

  it("returns defaultValue for empty path", () => {
    expect(get(object, "", "default")).to.equal("default");
  });

  it("returns defaultValue when path components do not exist", () => {
    expect(get(object, "a[1].b.c", "default")).to.equal("default");
  });

  it("handles paths with array-like accessors", () => {
    const arrayWithObjects = [{ a: 1 }, { b: 2 }];
    expect(get(arrayWithObjects, "[1].b")).to.equal(2);
  });

  it("returns undefined for a path that exceeds the depth of the structure", () => {
    expect(get(object, "a[0].b.c.d")).to.be.undefined;
  });

  it("returns the item in an array at a specific index", () => {
    const array = ["a", "b", "c"];
    expect(get(array, 1)).to.equal("b");
  });

  it("returns undefined for an invalid index in an array path", () => {
    const array = ["a", "b", "c"];
    expect(get(array, 5)).to.be.undefined;
  });

  it("returns undefined for empty path when defaultValue is not provided", () => {
    expect(get(object, "")).to.be.undefined;
  });
});
