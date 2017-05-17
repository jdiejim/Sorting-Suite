import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort';
import { getRandomNumbersArray, getRandomLettersArray } from '../scripts/getRandomArray';

describe('Insertion Sort', () => {
  it.skip('Should be a function', () => {
    expect(insertionSort).to.be.function;
  });

  // Numbers
  it.skip('Should sort array of numbers', () => {
    let numbers = getRandomNumbersArray(5, 10);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it.skip('Should sort large number arrays', () => {
    let numbers = getRandomNumbersArray(15000, 100);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it.skip('Should sort number arrays wit.skiph negative numbers', () => {
    let numbers = getRandomNumbersArray(10, 100, -100);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it.skip('Should move min number to front', () => {
    let numbers = getRandomNumbersArray(10, 10);
    let min = Math.min(...numbers);

    expect(insertionSort(numbers)[0]).to.be.equal(min);
  })

  it.skip('Should move max number to the last posit.skipion', () => {
    let numbers = getRandomNumbersArray(10, 10);
    let max = Math.max(...numbers);

    expect(insertionSort(numbers)[numbers.length - 1]).to.be.equal(max);
  })

  // Letters
  it.skip('Should sort array of letters', () => {
    let letters = getRandomLettersArray(10);
    let sorted = [...letters].sort();

    expect(insertionSort(letters)).to.deep.equal(sorted);
  })

  it.skip('Should sort large letter arrays', () => {
    let letters = getRandomLettersArray(10000);
    let sorted = [...letters].sort();

    expect(insertionSort(letters)).to.deep.equal(sorted);
  })

  it.skip('Should move min letter to front', () => {
    let letter = getRandomNumbersArray(10, 10);
    let min = Math.min(...letter);

    expect(insertionSort(letter)[0]).to.be.equal(min);
  })

  it.skip('Should move max number to the last posit.skipion', () => {
    let letter = getRandomNumbersArray(10, 10);
    let max = Math.max(...letter);

    expect(insertionSort(letter)[letter.length - 1]).to.be.equal(max);
  })
});
