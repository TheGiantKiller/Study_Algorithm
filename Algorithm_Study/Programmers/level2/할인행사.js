// 원하는 구간에 과일이 몇개 있는 지확인 하면 된다. (10일기준)
//  투포인터 o(N)

const day_check_answer = (count_array, want) => {
  let flag = true;
  [...want].some((element) => {
    const [fruit, cnt] = element;
    if (!count_array.has(fruit)) {
      flag = false;
    }
    if (count_array.get(fruit) < cnt) {
      flag = false;
    }
  });
  return flag;
};

function solution(want, number, discount) {
  let count_array = new Map();
  let user_want = new Map();
  let answer = 0;
  // 0~ 10까지만
  for (let i = 0; i < 10; i++) {
    const fruit = discount[i];
    if (!count_array.has(fruit)) {
      count_array.set(fruit, 1);
    } else {
      count_array.set(fruit, count_array.get(fruit) + 1);
    }
  }
  for (let i = 0; i < want.length; i++) {
    user_want.set(want[i], number[i]);
  }
  let end = 9;
  for (let start = 0; start < discount.length; start++) {
    if (end >= discount.length) {
      break;
    }
    if (day_check_answer(count_array, user_want)) {
      answer += 1;
    }

    const fruit = discount[start];
    count_array.set(fruit, count_array.get(fruit) - 1);
    end += 1;
    if (count_array.has(discount[end])) {
      count_array.set(discount[end], count_array.get(discount[end]) + 1);
    } else {
      count_array.set(discount[end], 1);
    }
  }
  return answer;
}
console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
solution(
  ["apple"],
  [10],
  ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]
);
