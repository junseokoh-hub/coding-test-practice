function solution(answers) {
  const math1 = [1, 2, 3, 4, 5];
  const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let result = [];
  for (let i = 0; i < answers.length; i++) {
    if (math1[i % 5] === answers[i]) {
      count1++;
    }
    if (math2[i % 8] === answers[i]) {
      count2++;
    }
    if (math3[i % 10] === answers[i]) {
      count3++;
    }
  }
  const array = [count1, count2, count3];
  const maxCount = Math.max(count1, count2, count3);

  for (let i = 0; i < array.length; i++) {
    if (maxCount === array[i]) {
      result.push(i + 1);
    }
  }
  return result;
}
