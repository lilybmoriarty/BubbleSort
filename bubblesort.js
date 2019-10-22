function bubbleSort(array) {
  let sortedArray = [];
  let counter = 0;
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    let secondNum = array[i + 1];
    if (firstNum > secondNum) {
      sortedArray = swap(array, i, i + 1);
      counter++;
    }
  }
  if (counter > 0) {
    counter = 0;
    return bubbleSort(sortedArray);
  } else {
    sortedArray = array;
    return sortedArray;
  }
}
function swap(arr, idx1, idx2) {
  let firstVal = arr[idx1];
  let secondVal = arr[idx2];
  arr[idx1] = secondVal;
  arr[idx2] = firstVal;
  return arr;
}
