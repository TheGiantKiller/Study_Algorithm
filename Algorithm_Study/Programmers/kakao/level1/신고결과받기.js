// id에 대한 신고 당한 횟수 기록
// k번 신고당하면 정지당함
// 정지당한 아이디는 신고한 유저에게 메일로 전송

// 다시품

function solution(id_list, report, k) {
  let answer = [];
  let users = new Map(); // 신고한 유저 목록저장
  let singo_list = new Map(); //신고당한 횟수
  let block_user = []; // 블록당한 유저가 저장됨
  id_list.forEach((id) => {
    users.set(id, []);
    singo_list.set(id, 0);
  });

  report.forEach((user) => {
    const [id, target] = user.split(" ");
    const user_list = users.get(id);
    // 유저에는 target이 한번만 저장되어야함 중복신고불가능 처리
    if (!user_list.includes(target)) {
      user_list.push(target);
      singo_list.set(target, singo_list.get(target) + 1);
      users.set(id, [...user_list]);
    }
  });
  // 블록 시킬유저저장
  [...singo_list].forEach((e) => {
    const [user, cnt] = e;
    if (cnt >= k) {
      block_user.push(user);
    }
  });
//   정답찾기
  id_list.forEach((id) => {
    let cnt = 0;
    const targets = users.get(id);
    targets.forEach((user) => {
      if (block_user.includes(user)) {
        cnt += 1;
      }
    });
    answer.push(cnt);
  });

  return answer;
}

// solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
