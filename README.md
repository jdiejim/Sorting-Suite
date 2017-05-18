# Sorting Suite

This JS library contains different implementations of sorting algorithms including:

* Quick Sort
* Merge Sort
* Insertion Sort
* Bubble Sort

Library also includes:

* Random numbers array generator
* Random letters array generator

### Install

```Terminal
npm install
```

### Guide

* sorting example:

```Javascript
import { quickSort } from '.@jdiejim/sorting-suite';

let numbers = [1, 5, 3, 2, 4];
quickSort(numbers); // -----> returns [1, 2, 3, 4, 5]
```

#### Random Array Guide

* getRandomNumbersArray(n, max, min = 0): ----> returns random array of numbers between max and min of n length
* getRandomLettersArray(n): ----> returns random array of letters of n length
* random array example:

```Javascript
let numbers = getRandomNumbersArray(5, 10); // -----> returns [9, 3, 4, 7, 2]
```
