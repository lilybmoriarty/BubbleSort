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
  splitArray = splitArray[0].concat(splitArray[1]);

  return splitArray;
}

function mergeSort(arr) {
  // [1, 3, 5, 2, 4]

  if (arr.length <= 1) {
    return arr;
  }

  let arrOfArrays = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    while (element.length > 1) {
      split(element);
    }
    arrOfArrays.push([element]);
  }

  for (let i = 0; i < arrOfArrays.length; i++) {
    if (arrOfArrays[i] < arrOfArrays[i + 1]) {
      merge([arrOfArrays[i], arrOfArrays[i + 1]]);
    } else {
      merge([arrOfArrays[i + 1], arrOfArrays[i]]);
    }
  }
}
