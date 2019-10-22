function split(wholeArray) {
  let midpoint = Math.ceil(wholeArray.length / 2);
  if (wholeArray.length <= 1) {
    return wholeArray;
  }

  let firstHalf = wholeArray.slice(0, midpoint);
  let secondHalf = wholeArray.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(splitArray) {
  let builder = [];

  for (let i = 0; i < splitArray.length; i++) {
    let element = splitArray[i];
    builder.push(...element);
    console.log(...element);
    console.log(builder);
  }
  return builder;
}
