// dfs로도 풀수잇음

function solution(cards) {
  let answer = [];
  let visited = new Array(cards.length + 1).fill(false);
  // 1. cards수 만큼 상자를 준비
  const boxes = new Map();

  // 2. 준비된 상자에 카드를 한장씩 넣고 번호를 붙임
  for (let i = 1; i <= cards.length; i++) {
    boxes.set(i, cards[i - 1]);
  }
  console.log(boxes.size);
  // 3. 상자를 하나선택하고 상자안의 숫자 카드 확인 후 카드에 적힌 번호에 해당하는 상자를 열어 담긴 카드에 적힌숫자확인

  // 4. 상자가 이미열려있을떄까지 반복

  while (boxes.size) {
    let tmp = [];
    let box_choice = Array.from(boxes.keys());
    box_choice = box_choice[0];
    while (true) {
      let cardNumber = boxes.get(box_choice);
      if (visited[box_choice]) {
        break;
      }

      boxes.delete(box_choice);
      visited[box_choice] = true;
      box_choice = cardNumber;
      tmp.push(cardNumber);
    }
    answer.push([...tmp]);
  }

  answer.sort((a, b) => b.length - a.length);

  if (answer.length >= 2) {
    return answer[0].length * answer[1].length;
  }
  return 0;
}

solution([8, 6, 3, 7, 2, 5, 1, 4]);
