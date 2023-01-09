function solution(k, score) {
  const array = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      array.push(score[i]);
    }

    if (score[i] > Math.min(...array)) {
      array.splice(array.length - 1, 1, score[i]);
      array.sort((a, b) => b - a);
    }
    answer.push(array.at(-1));
  }
  return answer;
}
