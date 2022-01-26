/* eslint-env mocha */
import { expect } from "chai";
import { detectSums } from "./utils";

describe("Detect sums", () => {
  it("should fail if input is not an array", () => {
    expect(() => detectSums()).to.throw("Input is not an array");
  });

  it("should return an array", () => {
    const result = detectSums([]);
    expect(result).to.be.instanceof(Array);
  });

  it("should detect sums", () => {
    const result = detectSums([1, 2]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(0);
  });

  it("should detect sums in order", () => {
    const result = detectSums([1, 2, 3]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(1);
    expect(result).to.deep.include({ pA: 0, pB: 1, sum: 2 });
  });
});

describe("Adrian's tests", () => {
  it("should work with repeating numbers and get the unique combination", () => {
    const result = detectSums([0, 1, 1, 2]);
    expect(result).to.deep.include([
      { pA: 0, pB: 1, sum: 1 },
      { pA: 0, pB: 1, sum: 2 },
      { pA: 0, pB: 2, sum: 2 },
      { pA: 0, pB: 3, sum: 3 },
      { pA: 1, pB: 2, sum: 3 },
    ]);
  });

  it("should fail with incorrect combinations", () => {
    const result = detectSums([11, 12]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(0);
  });

  it("should fail with input other than numbers", () => {
    const result = detectSums(["a", "b", "c"]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(0);
  });
});
