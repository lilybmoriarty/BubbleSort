describe("Bubble Sort Numbers", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("returns array if there is only one element in the array", function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it("given an unordered array returns the same array in order", function() {
    expect(bubbleSort([1, 5, 8, 2])).toEqual([1, 2, 5, 8]);
  });
});

describe("Bubble Sort Letters", function() {
  it("given an array of letters returns them in alphabetical order", function() {
    expect(bubbleSort([a, c, b])).toEqual([a, b, c]);
  });
});
