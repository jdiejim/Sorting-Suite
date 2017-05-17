import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort';
import { getRandomNumbersArray, getRandomLettersArray } from '../scripts/getRandomArray';

describe('Insertion Sort', () => {
  it('Should be a function', () => {
    expect(insertionSort).to.be.function;
  });

  // Numbers
  it('Should sort array of numbers', () => {
    let numbers = getRandomNumbersArray(5, 10);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it('Should sort large number arrays', () => {
    let numbers = getRandomNumbersArray(15000, 100);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it('Should sort number arrays with negative numbers', () => {
    let numbers = getRandomNumbersArray(10, 100, -100);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it('Should move min number to front', () => {
    let numbers = getRandomNumbersArray(10, 10);
    let min = Math.min(...numbers);

    expect(insertionSort(numbers)[0]).to.be.equal(min);
  })

  it('Should move max number to the last position', () => {
    let numbers = getRandomNumbersArray(10, 10);
    let max = Math.max(...numbers);

    expect(insertionSort(numbers)[numbers.length - 1]).to.be.equal(max);
  })

  // Letters
  it('Should sort array of letters', () => {
    let letters = getRandomLettersArray(10);
    let sorted = [...letters].sort();

    expect(insertionSort(letters)).to.deep.equal(sorted);
  })

  it('Should sort large letter arrays', () => {
    let letters = getRandomLettersArray(10000);
    let sorted = [...letters].sort();

    expect(insertionSort(letters)).to.deep.equal(sorted);
  })

  it('Should move min letter to front', () => {
    let letter = getRandomNumbersArray(10, 10);
    let min = Math.min(...letter);

    expect(insertionSort(letter)[0]).to.be.equal(min);
  })

  it('Should move max number to the last position', () => {
    let letter = getRandomNumbersArray(10, 10);
    let max = Math.max(...letter);

    expect(insertionSort(letter)[letter.length - 1]).to.be.equal(max);
  })
});
