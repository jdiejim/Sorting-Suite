import { getRandomNumbersArray, getRandomLettersArray, getRandomAlphaNumArray } from '../scripts/getRandomArray';
import bubbleSort from '../scripts/bubbleSort';
import insertionSort from '../scripts/insertionSort';
import mergeSort from '../scripts/mergeSort';
import quickSort from '../scripts/quickSort';

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();

// let numbers = [9, 8, 5, 2, 1, 6, 3];
// let sortedNumbers = [...numbers].sort((a, b) => a - b);
// let toBeSorted = [...numbers];
// let expected = [1, 2, 3, 5, 8, 6, 9];
//
// console.log(`original: `);
// console.log(sortedNumbers);
// console.log(`expected: ${expected}`);
// console.log(quickSort(toBeSorted));
// console.log(toString(quickSort(toBeSorted)) === toString(expected));
//
// function toString(array) {
//   return array.reduce((string, e) => {
//     return `${string}${e}`
//   }, '')
// }

let prac = [3,1,4,1,5,9,2,6,5,3]
console.log(quickSort(prac));

// let array = [1, 2, 3, 4, 5];

// let newArray = [...array]
//             [1, 2, 3, 4, 5]
