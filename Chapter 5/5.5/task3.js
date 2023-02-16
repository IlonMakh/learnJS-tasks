let array = [1, 2, 3, 4, 5];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr = arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(array, 2, 5);
