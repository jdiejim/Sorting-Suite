function merge(left, right) {
  let array = [];

  while (left.length && right.length) {
    if ( left[0] <= right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }

  while (left.length) {
    array.push(left.shift())
  }

  while (right.length) {
    array.push(right.shift())
  }

  return array;
}

function mergeSort(array) {
  let divider = Math.floor(array.length / 2);
  let left = [...array].slice(0, divider);
  let right = [...array].slice(divider);

  if (array.length < 2) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
