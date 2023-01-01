function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (findPrime(i)) {
      count++;
    }
  }
  return count;
}

function findPrime(k) {
  for (let i = 2; i <= Math.sqrt(k); i++) {
    if (k % i === 0) return false;
  }
  return true;
}
