function solution(s) {
  const stringNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < stringNumbers.length; i++) {
    s.split(stringNumbers[i]).join(i);
  }

  return parseInt(s);
}
