function solution(dartResult) {
  let answer = 0;
  const newArr = [];
  const sumArr = [];
  let arr = dartResult.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1" && arr[i + 1] === "0") {
      newArr.push(arr[i] + arr[i + 1]);
      i++;
    } else {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "S") {
      sumArr.push(Math.pow(newArr[i - 1], 1));
    } else if (newArr[i] === "D") {
      sumArr.push(Math.pow(newArr[i - 1], 2));
    } else if (newArr[i] === "T") {
      sumArr.push(Math.pow(newArr[i - 1], 3));
    } else if (newArr[i] === "#") {
      sumArr[sumArr.length - 1] *= -1;
    } else if (newArr[i] === "*") {
      sumArr[sumArr.length - 1] *= 2;
      sumArr[sumArr.length - 2] *= 2;
    }
  }
  let parseSumArr = sumArr
    .map((item) => parseInt(item))
    .reduce((sum, value) => (sum += value));
  return parseSumArr;
}
