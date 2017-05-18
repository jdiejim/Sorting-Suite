function quickSort(array) {
  const smaller = [];
  const larger = [];
  const pivot = array[0];

  if (array.length < 2) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    pivot > array[i] ? smaller.push(array[i])
                     : larger.push(array[i]);
  }

  return [...quickSort(smaller), pivot, ...quickSort(larger)];
}

export default quickSort;
