function solution(num) {
  let count = 0;
  for (let i = 0; i <= 500; i++) {
    if (num === 1) {
      return count;
    } else {
      if (num % 2 === 0) {
        num = num / 2;
        count += 1;
      } else {
        num = num * 3 + 1;
        count += 1;
      }
    }
    if (count > 500) {
      return -1;
    }
  }
}
