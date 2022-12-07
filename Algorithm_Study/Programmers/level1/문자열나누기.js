const checkAnswer = (x_count, other_count) => {
  return x_count === other_count ? true : false;
};
function solution(s) {
  var answer = 0;
  let start = 0;

  while (start < s.length) {
    let x = s[start];
    let [x_count, other_count] = [1, 0];
    for (let j = start + 1; start < s.length; j++) {
      let other = s[j];
      if (checkAnswer(x_count, other_count)) {
        answer += 1;
        start = j;
        break;
      }
      if (x === other) {
        x_count += 1;
      } else if (x !== other) {
        other_count += 1;
      }
    }
  }

  return answer;
}
solution("banana");
solution("abracadabra");
