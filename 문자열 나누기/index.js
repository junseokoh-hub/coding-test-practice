function solution(s) {
  let answer = 0;
  let word = "";
  let count1 = 0;
  let count2 = 0;

  for (const value of s) {
    if (!word) {
      word = value;
    }

    if (word === value) {
      count1++;
    } else {
      count2++;
    }

    if (count1 === count2) {
      word = "";
      answer++;
      count1 = 0;
      count2 = 0;
    }
  }
  if (word) answer++;

  return answer;
}
