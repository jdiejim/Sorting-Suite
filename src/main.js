import bubbleSort from '../scripts/bubbleSort';
import getRandomArray from '../scripts/getRandomArray';

let x = getRandomArray(100, 100);
console.log(x);
console.log(x.sort((a, b) => a - b));
