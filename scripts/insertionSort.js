// Insertion Sort
function insertionSort(array) {
  for (let i = 0, pivot = 1; i < array.length - 1; i++, pivot++) {
    let index = pivot;

    for (let j = pivot - 1; j >= 0; j--) {
      if (array[index] < array[j]) {
        [array[j], array[index]] = [array[index], array[j]];
        index--;
      }
    }
  }
  return array
}

export default insertionSort;
