import { expect } from 'chai';
import { getRandomNumbersArray, getRandomLettersArray } from '../scripts/getRandomArray';
import insertionSort from '../scripts/insertionSort';

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

  it('Should sort large array of numbers', () => {
    let numbers = getRandomNumbersArray(24000, 100);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it('Should sort arrays with negative numbers', () => {
    let numbers = getRandomNumbersArray(10, 100, -100);
    let sorted = [...numbers].sort((a, b) => a - b);

    expect(insertionSort(numbers)).to.deep.equal(sorted);
  })

  it('Should move min number to first position of the array', () => {
    let numbers = getRandomNumbersArray(10, 10);
    let min = Math.min(...numbers);

    expect(insertionSort(numbers)[0]).to.be.equal(min);
  })

  it('Should move max number to the last position of the array', () => {
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

  it('Should sort large array of letters', () => {
    let letters = getRandomLettersArray(17000);
    let sorted = [...letters].sort();

    expect(insertionSort(letters)).to.deep.equal(sorted);
  })
});
