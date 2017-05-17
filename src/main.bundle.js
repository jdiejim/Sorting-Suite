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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
exports.getRandomNumbersArray = getRandomNumbersArray;
exports.getRandomLettersArray = getRandomLettersArray;
exports.getRandomAlphaNumArray = getRandomAlphaNumArray;
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

function getRandomAlphaNumArray(length, max) {
  var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var array = [];

  for (var i = 0; i < length; i++) {
    var rand = getRandomNumber(1);

    if (rand === 1) {
      array.push(getRandomLetter());
    } else {
      array.push(getRandomNumber(max, min));
    }
  }
  return array;
}

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

  if (left.length > 1) {
    left = mergeSort(left);
  }

  if (right.length > 1) {
    right = mergeSort(right);
  }

  return merge(left, right);
}

exports.default = mergeSort;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function quickSort(array) {
  var small = [];
  var large = [];
  var pivot = array[0];

  console.log('pivot: ' + pivot);
  console.log('array: ' + array);

  if (array.length < 2) {
    return array;
  }

  for (var i = 1; i < array.length; i++) {
    pivot > array[i] ? small.push(array[i]) : large.push(array[i]);
  }

  console.log('small: ' + small);
  console.log('large: ' + large);
  console.log('--------------');
  console.log();

  return [].concat(_toConsumableArray(quickSort(small)), [pivot], _toConsumableArray(quickSort(large)));
}

exports.default = quickSort;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getRandomArray = __webpack_require__(1);

var _bubbleSort = __webpack_require__(0);

var _bubbleSort2 = _interopRequireDefault(_bubbleSort);

var _insertionSort = __webpack_require__(2);

var _insertionSort2 = _interopRequireDefault(_insertionSort);

var _mergeSort = __webpack_require__(3);

var _mergeSort2 = _interopRequireDefault(_mergeSort);

var _quickSort = __webpack_require__(4);

var _quickSort2 = _interopRequireDefault(_quickSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prac = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log((0, _quickSort2.default)(prac));

// let array = [1, 2, 3, 4, 5];

// let newArray = [...array]
//             [1, 2, 3, 4, 5]

/***/ })
/******/ ]);