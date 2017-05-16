import { getRandomArray, getRandomLettersArray } from '../scripts/getRandomArray';
import bubbleSort from '../scripts/bubbleSort';
import insertionSort from '../scripts/insertionSort';

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();

// let array = [5, 4, 2, 0, 1, 3];
let array2 = [5, 4, 2, 0, 1, 3];
// let array = getRandomArray(10, 100);
// let array2 = [...array]
let larray = getRandomLettersArray(10);

// console.log(`origi: ${array}`);
// console.log(`inset: ${bubbleSort(array)}`);
console.log(`origi: ${array2}`);
console.log(`inset: ${insertionSort(array2)}`);
console.log(larray);
console.log(bubbleSort(larray));

// let arr2 = [1, 2, 3, 4, 6]
//
// console.log(arr2);
//
// arr2.splice(4, 0, 5)
// console.log(arr2);
