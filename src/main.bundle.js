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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomLetter() {
  var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return letter[getRandomNumber(51)];
}

function getRandomNumbersArray(length, max) {
  var array = [];

  for (var i = 0; i < length; i++) {
    array.push(getRandomNumber(max));
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


var _getRandomArray = __webpack_require__(1);

var _bubbleSort = __webpack_require__(0);

var _bubbleSort2 = _interopRequireDefault(_bubbleSort);

var _insertionSort = __webpack_require__(2);

var _insertionSort2 = _interopRequireDefault(_insertionSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Empty Lines
console.log('--------------------------------------------------------------------');
console.log();
console.log();

// let array = [5, 4, 2, 0, 1, 3];
var array2 = [5, 4, 2, 0, 1, 3];
// let array = getRandomArray(10, 100);
// let array2 = [...array]

// console.log(`origi: ${array}`);
// console.log(`inset: ${bubbleSort(array)}`);
console.log('origi: ' + array2);
console.log('inset: ' + (0, _insertionSort2.default)(array2));
var larray = (0, _getRandomArray.getRandomLettersArray)(10);
console.log(larray);
console.log((0, _bubbleSort2.default)(larray));

// let arr2 = [1, 2, 3, 4, 6]
//
// console.log(arr2);
//
// arr2.splice(4, 0, 5)
// console.log(arr2);

/***/ })
/******/ ]);