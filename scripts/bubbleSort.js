// Bubble Sort
function bubbleSort(array) {
  let swap = true;

  while (swap) {
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}

export default bubbleSort;
