function solution(x) {
  let a = x
    .toString()
    .split("")
    .map((item) => parseInt(item))
    .reduce((a, c) => a + c, 0);
  if (x % a) {
    return true;
  } else {
    return false;
  }
}
