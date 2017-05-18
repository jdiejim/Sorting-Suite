function merge(left, right) {
  const array = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
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
  const divider = Math.floor(array.length / 2);
  let left = [...array].slice(0, divider);
  let right = [...array].slice(divider);

  if (left.length > 1) {
    left = mergeSort(left)
  }

  if (right.length > 1) {
    right = mergeSort(right)
  }

  return merge(left, right);
}

export default mergeSort;
