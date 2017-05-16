// Merge Sort
function merge(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[j] > array2[i]) {
        [array1[j], array2[i]] = [array2[i], array1[j]]
      }
    }
  }
  array1.push(...array2)
  return array1;
}

function mergeSort(array) {
  let divider = Math.floor(array.length / 2);
  let firstSplit = [...array].slice(0, divider);
  let secondSplit = [...array].slice(divider);

  // console.log(firstSplit);
  // console.log(secondSplit);

  if (divider === 1) {
    return merge(firstSplit, secondSplit);
  }

  return merge(mergeSort(firstSplit), mergeSort(secondSplit));
}

export default mergeSort;
