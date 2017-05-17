function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
  let letter = [
    'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b',
    'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r',
    's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'
  ];

  return letter[getRandomNumber(51)];
}

export function getRandomNumbersArray(length, max, min = 0) {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(getRandomNumber(max, min));
  }
  return array;
}

export function getRandomLettersArray(length) {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(getRandomLetter());
  }
  return array;
}
