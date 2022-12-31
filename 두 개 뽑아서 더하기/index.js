function solution(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = 0; k < numbers.length; k++) {
      if (i !== k) {
        answer.push(numbers[i] + numbers[k]);
      }
    }
  }
  const set = new Set(array);
  return [...set].sort((a, b) => a - b);
}
