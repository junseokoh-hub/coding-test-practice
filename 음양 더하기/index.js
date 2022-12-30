function solution(absolutes, signs) {
  let answer = [];
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      answer.push(absolutes[i] * 1);
    } else if (signs[i] === false) {
      answer.push(absolutes[i] * -1);
    }
  }
  const sum = answer.reduce((a, c) => a + c, 0);
  return sum;
}
