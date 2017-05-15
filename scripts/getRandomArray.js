function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomArray(length, max) {
  let array = [];
  
  for (let i = 0; i < length; i++) {
    array.push(getRandomNumber(max));
  }
  return array;
}

export default getRandomArray;
