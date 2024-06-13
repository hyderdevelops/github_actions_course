function AddTwoNumbers(x, y) {
  return x + y;
}

function CountTotalElementsInArray(arr) {
  let index = 0;
  while (arr[index] != null) {
    index++;
  }
  return index;
}

module.exports = {
  AddTwoNumbers,
  CountTotalElementsInArray,
};
