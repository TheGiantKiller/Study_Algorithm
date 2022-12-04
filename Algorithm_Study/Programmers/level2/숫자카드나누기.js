// 유클리드 호제법

const gcd = (a, b) => {
  let tmp;
  let n;

  if (a < b) {
    tmp = a;
    a = b;
    b = tmp;
  }

  while (b != 0) {
    n = a % b;
    a = b;
    b = n;
  }
  return a;
};

const isValid = (array, gcd) => {
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number % gcd === 0) {
      return false;
    }
  }
  return true;
};

function solution(arrayA, arrayB) {
  let answer = 0;

  let chulsu = [...arrayA].sort((a, b) => a - b);
  let younghee = [...arrayB].sort((a, b) => a - b);

  let chuldsu_gcd = chulsu.reduce((a, b) => gcd(a, b));
  let younghee_gcd = younghee.reduce((a, b) => gcd(a, b));

  if (isValid(younghee, chuldsu_gcd)) {
    answer = Math.max(answer, chuldsu_gcd);
  }

  if (isValid(chulsu, younghee_gcd)) {
    answer = Math.max(answer, younghee_gcd);
  }
  return answer;
}

// solution([10, 17], [5, 20]);
console.log(solution([20, 40, 10], [5, 17]));
// solution([14, 35, 119], [18, 30, 102]);
