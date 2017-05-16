import { getRandomArray, getRandomLettersArray } from '../scripts/getRandomArray';
import bubbleSort from '../scripts/bubbleSort';
import insertionSort from '../scripts/insertionSort';
import mergeSort from '../scripts/mergeSort';

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();
let array = [ 5, 2, 9, 8, 6, 7 ];
let array2 = [ 2, 5, 6, 9, 8, 7 ];

// console.log(mergeSort(array));
// mergeSort(array)

let a1 = [2, 0];
let a2 = [1, 3];


// merge(a1, a2)
// console.log(merge(a1, a2));
// console.log(merge([2], [0]));
// console.log([...array.splice(0, 2)]);
// console.log([...array].splice(0, 2));
// console.log([...array].splice(2));
// console.log(mergeSort(array));n
console.log(mergeSort(array2));
