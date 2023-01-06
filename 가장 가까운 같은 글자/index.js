function solution(s) {
  const words = [];
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (!words.includes(s[i])) {
      answer.push(-1);
      words.push(s[i]);
    } else {
      answer.push(words.length - words.lastIndexOf(s[i]));
      words.push(s[i]);
    }
  }
  return answer;
}
