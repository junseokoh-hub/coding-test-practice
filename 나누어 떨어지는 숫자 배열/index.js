function solution(arr, divisor) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) {
    return [-1];
  } else {
    return result.sort((a, b) => a - b);
  }
}
