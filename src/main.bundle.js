/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Bubble Sort
function bubbleSort(array) {
  var swap = true;

  while (swap) {
    swap = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap = true;
        var _ref = [array[i + 1], array[i]];
        array[i] = _ref[0];
        array[i + 1] = _ref[1];
      }
    }
  }
  return array;
}

exports.default = bubbleSort;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Insertion Sort
function insertionSort(array) {
  for (var i = 0, pivot = 1; i < array.length - 1; i++, pivot++) {
    var index = pivot;

    for (var j = pivot - 1; j >= 0; j--) {
      if (array[index] < array[j]) {
        var _ref = [array[index], array[j]];
        array[j] = _ref[0];
        array[index] = _ref[1];

        index--;
      }
    }
  }
  return array;
}

exports.default = insertionSort;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomNumbersArray = getRandomNumbersArray;
exports.getRandomLettersArray = getRandomLettersArray;
function getRandomNumber(max) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return letter[getRandomNumber(51)];
}

function getRandomNumbersArray(length, max) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var array = [];

  for (var i = 0; i < length; i++) {
    array.push(getRandomNumber(max, min));
  }
  return array;
}

function getRandomLettersArray(length) {
  var array = [];

  for (var i = 0; i < length; i++) {
    array.push(getRandomLetter());
  }
  return array;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _insertionSort = __webpack_require__(1);

var _insertionSort2 = _interopRequireDefault(_insertionSort);

var _bubbleSort = __webpack_require__(0);

var _bubbleSort2 = _interopRequireDefault(_bubbleSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// // Merge Sort
// function merge(array1, array2) {
//   // for (let i = 0; i <= array1.length; i++) {
//   //   for (let j = 0; j <= array2.length; j++) {
//   //     if (array1[j] > array2[i]) {
//   //       [array1[j], array2[i]] = [array2[i], array1[j]]
//   //     }
//   //   }
//   // }
//   // array1.push(...array2)
//   console.log(`first: ${array1} second: ${array2}`);
//   return array1;
// }

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

// for (let i = 0, pivot = 1; i < array.length - 1; i++, pivot++) {
//   let index = pivot;
//
//   for (let j = pivot - 1; j >= 0; j--) {
//     if (array[index] < array[j]) {
//       [array[j], array[index]] = [array[index], array[j]];
//       index--;
//     }
//   }
// }
// return array
//
// function merge(array1, array2) {
//   let array = [];
//   let len = array1.length;
//
//   for (let i = 0; i < len; i++) {
//     if (array1[0] > array2[i]) {
//       array.push(array2[i]);
//     } else {
//       array.push(array1[i]);
//     }
//     array1.shift()
//   }
//   return array;
// }

function merge(left, right) {
  var array = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  while (left.length) {
    array.push(left.shift());
  }

  while (right.length) {
    array.push(right.shift());
  }

  return array;
}

function mergeSort(array) {
  var divider = Math.floor(array.length / 2);
  var left = [].concat(_toConsumableArray(array)).slice(0, divider);
  var right = [].concat(_toConsumableArray(array)).slice(divider);

  if (array.length < 2) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
}

// function mergeSort(array) {
//   let swapped = true;
//   let divider = Math.floor(array.length / 2);
//   let left = [...array].slice(0, divider);
//   let right = [...array].slice(divider);
//
//   console.log(`first: ${left} second: ${right}`);
//
//   if (array.length > 1 && left.length > 1) {
//     left = mergeSort(left)
//   }
//
//   if (array.length > 1 && right.length > 1) {
//     right = mergeSort(right)
//   }
//
//
//   // console.log('Before: L ', left, 'R ', right);
//
//   // console.log(right.length + 'right');
//   // console.log(left.length + 'left');
//
//   // console.log(`before left: ${left}`);
//   // console.log(`before right: ${right}`);
//
//   // if (right.length > left.length) {
//   //   leftLength = right.length;
//   //   rightLength = left.length;
//   // }
//
//   // while (swapped) {
//   //   let sorted = [];
//   //
//   //   swapped = false;
//   //   if (left[0] > right[0]) {
//   //     [left[0], right[0]] = [right[0], left[0]];
//   //     swapped = true;
//   //   }
//
//
//     // for (let i = 0; i < left.length; i++) {
//     //   for (let j = 0; j < right.length; j++) {
//     //     if (left[i] > right[j]) {
//     //       [left[i], right[j]] = [right[j], left[i]];
//     //       swapped = true;
//     //     }
//     //   }
//     // }
//
//
//
//
//   // if (left[0] > right[0]) {
//   //   [left[0], right[0]] = [right[0], left[0]];
//   // }
//
//   // console.log('After: L ', left, 'R ', right);
//
//   // console.log(`merged: ${array}`);
//   // console.log(`swapped left: ${left}`);
//   // console.log(`swapped right: ${right}`);
//   // merge(left, right);
//   array = merge(left, right)
//   console.log(array);
//   console.log();
//   return array;
//
//
//   // let divider = Math.floor(array.length / 2);
//   // let firstSplit = [...array].slice(0, divider);
//   // let secondSplit = [...array].slice(divider);
//   //
//   // console.log(`first: ${firstSplit} second: ${secondSplit}`);
//   //
//   // if (divider === 1) {
//   //   return merge(firstSplit, secondSplit);
//   // }
//   //
//   // return mergeSort(merge(firstSplit, secondSplit));
// }

exports.default = mergeSort;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getRandomArray = __webpack_require__(2);

var _bubbleSort = __webpack_require__(0);

var _bubbleSort2 = _interopRequireDefault(_bubbleSort);

var _insertionSort = __webpack_require__(1);

var _insertionSort2 = _interopRequireDefault(_insertionSort);

var _mergeSort = __webpack_require__(3);

var _mergeSort2 = _interopRequireDefault(_mergeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();

var array = [5, 9, 2, 8, 6, 7, 10, 11];
// let numbers = getRandomNumbersArray(10, 10);
var numbers = [10, 8, 3, 7, 10, 2, 1, 0, 2, 7];
var original = [].concat(numbers);
var sorted = [].concat(numbers).sort(function (a, b) {
  return a - b;
});

console.log('original: ' + original);
console.log('merged:   ' + (0, _mergeSort2.default)(numbers));
console.log('sorted:   ' + sorted);

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

var q = [2];
var y = [0];

function merge(a1, a2) {
  var array = [];

  return array;
}

// console.log(merge(q, y));
console.log(merge(q, y));
// console.log(merge([5, 9, 2, 8], [6, 7, 10, 11]));

/***/ })
/******/ ]);