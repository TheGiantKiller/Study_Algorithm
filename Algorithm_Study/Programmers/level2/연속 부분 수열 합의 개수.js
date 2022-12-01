const total = (start, elements, loop) => {
  let sum = 0;
  let [cnt, idx] = [0, start];
  while (cnt < loop) {
    sum += elements[idx];
    idx = (idx + 1) % elements.length;
    cnt += 1;
  }
  return sum;
};

function solution(elements) {
  let answer = new Set();

  for (let i = 0; i < elements.length; i++) {
    let len = i;
    let tmp = new Set();
    for (let j = 0; j < elements.length; j++) {
      let start = j;
      tmp.add(total(start, elements, len + 1));
    }
    [...tmp].forEach((element) => answer.add(element));
  }

  return answer.size;
}
solution([7, 9, 1, 1, 4]);
