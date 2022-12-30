function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }

  const sum = answer.reduce((a, c) => a + c, 0);
  return sum;
}
