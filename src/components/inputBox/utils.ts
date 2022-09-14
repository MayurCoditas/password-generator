import _ from "lodash";
export const randomizer = (
  length: number,
  lowerCase: boolean,
  upperCase: boolean,
  numbers: boolean,
  symbols: boolean
): string => {
  const upperCaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const symbolsArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "{",
    "}",
    "[",
    "]",
    "~",
  ];
  let arr = [];
  let mix: string[] = [];
  if (lowerCase) {
    arr.push(randomSelector(lowerCaseLetters));
    mix = mix.concat(lowerCaseLetters);
    length--;
  }
  if (upperCase) {
    arr.push(randomSelector(upperCaseLetters));
    mix = mix.concat(upperCaseLetters);
    length--;
  }
  if (numbers) {
    arr.push(randomSelector(numbersArray));
    mix = mix.concat(numbersArray);
    length--;
  }
  if (symbols) {
    arr.push(randomSelector(symbolsArray));
    mix = mix.concat(symbolsArray);
    length--;
  }
  while (length > 0) {
    arr.push(randomSelector(mix));
    length--;
  }
  arr = _.shuffle(arr);
  return arr.join("");
};

const randomSelector = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};
