describe("Split Array function", function() {
  it("it returns and empty array if it's passed an empty array", function() {
    expect(split([])).toEqual([]);
  });
  it("it returns the same array if array length is 1", function() {
    expect(split([1])).toEqual([1]);
  });
  it("is able to split an even array into two halves", function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it("is able to split an odd numbered array", function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([[1], [2]])).toEqual([1, 2]);
    expect(merge([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(merge([[1, 2, 3, 4], [5, 6, 7, 8]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });

  it("handles odd number of elements within array", function() {
    expect(merge([[1, 2], [3]])).toEqual([1, 2, 3]);
  });
});
