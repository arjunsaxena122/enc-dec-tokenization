const tokens: Record<string, number> = {
  A: 48,
  B: 38,
  C: 17,
  D: 46,
  E: 500,
  F: 92,
  G: 42,
  H: 30,
  I: 21,
  J: 833,
  K: 50,
  L: 444,
  M: 29,
  N: 24,
  O: 11,
  P: 97,
  Q: 40,
  R: 565,
  S: 56,
  T: 44,
  U: 49,
  V: 7,
  W: 88,
  X: 58,
  Y: 66,
  Z: 94,
  a: 53,
  b: 57,
  c: 8,
  d: 45,
  e: 102,
  f: 60,
  g: 41,
  h: 39,
  i: 28,
  j: 78,
  k: 922,
  l: 4,
  m: 79,
  n: 864,
  o: 799,
  p: 74,
  q: 832,
  r: 9,
  s: 10,
  t: 33,
  u: 12,
  v: 55,
  w: 961,
  x: 26,
  y: 76,
  z: 62,
  " ": 14987,
  "!": 96,
  "@": 922,
  "#": 410,
  $: 95,
  "%": 57,
  "^": 400,
  "&": 16,
  "(": 83,
  ")": 35,
  "?": 8643,
  ">": 15,
  "<": 51,
  ".": 100,
  ",": 61,
  "/": 300,
  "[": 388,
  "]": 37,
  ";": 87,
  "{": 80,
  "}": 86,
  ":": 77,
  "|": 34,
};

let reverseTokens: Record<string, string> = {
  "4": "l",
  "7": "V",
  "8": "c",
  "9": "r",
  "10": "s",
  "11": "O",
  "12": "u",
  "15": ">",
  "16": "&",
  "17": "C",
  "21": "I",
  "24": "N",
  "26": "x",
  "28": "i",
  "29": "M",
  "30": "H",
  "33": "t",
  "34": "|",
  "35": ")",
  "37": "]",
  "38": "B",
  "39": "h",
  "40": "Q",
  "41": "g",
  "42": "G",
  "44": "T",
  "45": "d",
  "46": "D",
  "48": "A",
  "49": "U",
  "50": "K",
  "51": "<",
  "53": "a",
  "55": "v",
  "56": "S",
  "57": "%",
  "58": "X",
  "60": "f",
  "61": ",",
  "62": "z",
  "66": "Y",
  "74": "p",
  "76": "y",
  "77": ":",
  "78": "j",
  "79": "m",
  "80": "{",
  "83": "(",
  "86": "}",
  "87": ";",
  "88": "W",
  "92": "F",
  "94": "Z",
  "95": "$",
  "96": "!",
  "97": "P",
  "100": ".",
  "102": "e",
  "300": "/",
  "388": "[",
  "400": "^",
  "410": "#",
  "444": "L",
  "500": "E",
  "565": "R",
  "799": "o",
  "832": "q",
  "833": "J",
  "864": "n",
  "922": "@",
  "961": "w",
  "8643": "?",
  "14987": " ",
};

// Token Counter

function tokenCounter(input: string) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    input === "" ? (count = 0) : count++;
  }
  return count;
}

// Encode Token
function tokenizationUserInput(userInput: string) {
  let encodeToken = [];
  for (let i = 0; i < userInput.length; i++) {
    encodeToken.push(tokens[userInput[i]]);
  }
  return encodeToken;
}

// Decode Token
function deTokenizationUserInput(token: string[]) {
  let decodeToken = [];
  for (let i = 0; i < token.length; i++) {
    decodeToken.push(reverseTokens[token[i]]);
  }
  return decodeToken.join("");
}

function randomeColorMaker() {
  const num1: number = Math.floor(Math.random() * 255);
  const num2: number = Math.floor(Math.random() * 255);
  const num3: number = Math.floor(Math.random() * 255);
  return `rgb(${num1},${num2},${num3})`;
}

export {
  tokenizationUserInput,
  deTokenizationUserInput,
  tokenCounter,
  randomeColorMaker,
};
