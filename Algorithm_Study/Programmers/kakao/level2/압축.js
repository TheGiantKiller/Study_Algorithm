let addNumber = 27;
let max_len = 1;
let dic = new Map();
let answer = [];

// 무지성 풀이

const init = (dic) => {
  for (let i = 65; i <= 90; i++) {
    const alpha = String.fromCharCode(i);
    dic.set(alpha, i - 65 + 1);
  }
};
const find_word = (idx, loop, msg) => {
  let start = idx;
  let end = start + 1;
  let w = msg[start];
  let newWords = [];
  let prev = "";
  let newWord = w;
  let cnt = 0;
  while (cnt < loop) {
    let c = msg[end];
    w = newWord;
    if (dic.has(w)) {
      newWord = w + c;
      prev = w;
      newWords.push([newWord, end]);
      max_len = Math.max(max_len, newWord.length);
    }

    end += 1;
    cnt += 1;
  }
  let t_word = newWords[newWords.length - 1][0];
  let t_word_idx = newWords[newWords.length - 1][1];
  dic.set(t_word, addNumber++);
  answer.push(dic.get(prev));
  return t_word_idx;
};

function solution(msg) {
  init(dic);
  let start = 0;

  while (start < msg.length) {
    start = find_word(start, max_len, msg);
  }
  return answer;
}
solution("KAKAO");
// solution("TOBEORNOTTOBEORTOBEORNOT");
