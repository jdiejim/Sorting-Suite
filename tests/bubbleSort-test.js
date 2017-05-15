import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort';

// should move min number to front
// should move max number to front (Math.max)
// should sort large arrays
// Copy lint

describe('Bubble Sort', () => {
  it('Should be a function', () => {
    expect(bubbleSort).to.be.function;
  });

  it('Should sort array numbers', () => {
    let numbers = [5, 3, 2, 4, 1];
    let sorted = bubbleSort(numbers);

    expect(sorted).to.equal([1, 2, 3, 4, 5]);
  })
});
