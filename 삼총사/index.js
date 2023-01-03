function solution(number) {
  const answer = [];
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        answer.push(number[i] + number[j] + number[k]);
      }
    }
  }
  const zeroFilter = answer.filter((item) => item === 0);
  return zeroFilter.length;
}
