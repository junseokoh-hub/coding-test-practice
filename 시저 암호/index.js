function solution(s, n) {
  const lowercase = [
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
  const uppercase = [
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
  let array = [];
  let index;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      array.push(s[i]);
      continue;
    }
    let where = lowercase.includes(s[i]) ? lowercase : uppercase;
    index = where.findIndex((item) => item === s[i]) + n;
    if (index > where.length - 1) {
      index = index - where.length;
    }
    array.push(where[index]);
  }
  return array.join("");
}
