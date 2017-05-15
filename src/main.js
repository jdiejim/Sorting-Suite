import getRandomArray from '../scripts/getRandomArray';
import bubbleSort from '../scripts/bubbleSort';

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();

let x = getRandomArray(5, 100);

console.log(x);
console.log(x.sort((a, b) => a - b));

console.log(Math.min(...x));
