// 43.5 % 까지맞음.. 내 솔루션이 틀린듯
function solution(n, k, enemy) {
  let total_rank = new Map();
  let new_enemy = [...enemy].sort((a, b) => b - a);
  let rank = 1;
  total_rank.set(new_enemy[0], rank);

  // 1. 지울 적에 대한 우선순위를 넣음
  for (let i = 1; i < new_enemy.length; i++) {
    if (new_enemy[i - 1] === new_enemy[i]) {
      total_rank.set(new_enemy[i], rank);
    } else {
      total_rank.set(new_enemy[i], ++rank);
    }
  }
  let life = n;
  let skill = k;
  //2.  우선순위가 k보다 크면 그냥 life에서 지우고 , 우선순위가 k보다 작거나 같으면 무적권을 사용

  for (let round = 0; round < enemy.length; round++) {
    let round_enemy_rank = total_rank.get(enemy[round]);
    let round_enemy = enemy[round];

    // 무적권사용
    if (round_enemy_rank <= k && skill > 0) {
      answer = round + 1;
      skill -= 1;
      continue;
    }
    if (life < round_enemy) {
      return round;
    }
    life -= round_enemy;
  }
  return enemy.length;
}
console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(3, 4, [2, 2, 2, 2, 4]));
