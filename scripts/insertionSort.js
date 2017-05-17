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


// insert array , ringht index, value
//
// for var j = right
// j>= 0 && array[j > value
// j
//
// then
//
// array[j+1] = array[j
//
// for i normal
//
// insert array i -1 array [i]]
