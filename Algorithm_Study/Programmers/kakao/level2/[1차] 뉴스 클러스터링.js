// 다시풀어바야할듯.. 문제를 잘이해고 풀자

// string에대해 카운팅함
const get_count = (map, str) => {
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    if (!map.has(s)) {
      map.set(s, 1);
    } else {
      map.set(s, map.get(s) + 1);
    }
  }
};

// 문자열 처리
const make_string = (str, list) => {
  let new_string = str.toUpperCase();
  for (let i = 0; i < new_string.length - 1; i++) {
    let a = new_string.charCodeAt(i);
    let b = new_string.charCodeAt(i + 1);

    if (a >= 65 && a <= 90 && b >= 65 && b <= 90) {
      list.push(new_string[i] + new_string[i + 1]);
    }
  }
};

// a와 b교집합을 구한다
const get_intersection = (str1, str2) => {
  let intersection = [];
  let a_map = new Map();
  let b_map = new Map();
  get_count(a_map, str1);
  get_count(b_map, str2);

  // a랑 b에 속해있어야하고 둘중에 작은값이 교집함
  [...a_map].forEach((e) => {
    const [alpha, a_cnt] = e;
    if (b_map.has(alpha)) {
      const b_cnt = b_map.get(alpha);
      const loop = Math.min(b_cnt, a_cnt);
      for (let i = 0; i < loop; i++) {
        intersection.push(alpha);
      }
    }
  });

  return intersection;
};

// 합집합을구한다.
const get_union = (str1, str2) => {
  let union = [];
  let a_map = new Map();
  let b_map = new Map();
  get_count(a_map, str1);
  get_count(b_map, str2);

  // a와 b둘다 존재하면 큰거의 개수를 넣어줌
  [...a_map].forEach((e) => {
    const [alpha, a_cnt] = e;
    if (b_map.has(alpha)) {
      const b_cnt = b_map.get(alpha);
      const loop = Math.max(b_cnt, a_cnt);
      for (let i = 0; i < loop; i++) {
        union.push(alpha);
      }
    } else {
      //b에없으면 그냥 a꺼만넣음
      for (let i = 0; i < a_cnt; i++) {
        union.push(alpha);
      }
    }
  });
  //a에 없는 나머지를 넣어준다.
  [...b_map].forEach((e) => {
    const [alpha, b_cnt] = e;
    if (!a_map.has(alpha)) {
      for (let i = 0; i < b_cnt; i++) {
        union.push(alpha);
      }
    }
  });

  return union;
};
const jakade = (str1, str2) => {
  let intersection = [];
  let union = [];

  intersection = get_intersection(str1, str2);
  union = get_union(str1, str2);

  let answer = (intersection.length / union.length) * 65536;
  answer = Math.floor(answer);

  return answer;
};

function solution(str1, str2) {
  let answer = 0;
  let listA = [];
  let listB = [];
  make_string(str1, listA);
  make_string(str2, listB);

  if (listA.length === 0 && listB.length === 0) {
    return 65536;
  }
  answer = jakade(listA, listB);
  return answer;
}
solution("FRANCE", "french");
solution("handshake", "shake hands");
solution("aa1+aa2", "AAAA12");
solution("E=M*C^2", "e=m*c^2");
