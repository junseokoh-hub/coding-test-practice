function solution(t, p) {
  const array = [];

  for (let i = 0; i < t.length; i++) {
    if (t.slice(i, i + p.length).length >= p.length) {
      array.push(t.slice(i, i + p.length));
    }
  }

  let count = 0;

  for (const value of array) {
    if (Number(value) <= Number(p)) {
      count++;
    }
  }

  return count;
}
