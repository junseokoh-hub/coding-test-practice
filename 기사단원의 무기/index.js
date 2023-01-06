function solution(number, limit, power) {
  const answer = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    answer.push(count + 1);
  }

  const result = answer.map((item) => (item > limit ? power : item));

  return result.reduce((a, c) => a + c, 0);
}
