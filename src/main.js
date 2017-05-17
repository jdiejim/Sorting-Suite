import { getRandomNumbersArray, getRandomLettersArray } from '../scripts/getRandomArray';
import bubbleSort from '../scripts/bubbleSort';
import insertionSort from '../scripts/insertionSort';
import mergeSort from '../scripts/mergeSort';

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();


let array = [ 5, 9, 2, 8, 6, 7, 10, 11 ];
// let numbers = getRandomNumbersArray(10, 10);
let numbers = [10,8,3,7,10,2,1,0,2,7]
let original = [...numbers]
let sorted = [...numbers].sort((a, b) => a - b);

console.log(`original: ${original}`);
console.log(`merged:   ${mergeSort(numbers)}`);
console.log(`sorted:   ${sorted}`);


// console.log(arr2);

// function merge(array1, array2) {
//   array1.push(...array2)
//   let length = array1.length;
//   let array = [];
//
//   for (let i = 0; i < length; i++) {
//     let min = Math.min(...array1)
//     let index = array1.indexOf(min)
//
//     array[i] = min
//     array1.splice(index, 1);
//   }
//   return array
// }

let q = [2];
let y = [0];

function merge(a1, a2) {
  let array = [];
  
  return array;
}

// console.log(merge(q, y));
console.log(merge(q, y));
// console.log(merge([5, 9, 2, 8], [6, 7, 10, 11]));
