function split(wholeArray) {
  let midpoint = Math.ceil(wholeArray.length / 2);
  if (wholeArray.length <= 1) {
    return wholeArray;
  }

  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}
