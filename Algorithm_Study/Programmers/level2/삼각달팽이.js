function solution(n) {
  let answer = [];
  let visited = Array.from(new Array(n).fill(0), () => new Array(n).fill(0));
  // 아래 오른쪽 대각선
  let dx = [1, 0, -1];
  let dy = [0, 1, -1];
  let [start_x, start_y] = [0, 0];
  let [cnt, next, loop] = [1, 0, n];

  if (n <= 3) {
    total = n * 2;
  } else {
    total = Math.pow(n - 1, 2) + 1;
  }

  while (cnt <= total) {
    for (let i = loop; i > 0; i--) {
      visited[start_x][start_y] = cnt;
      let [nx, ny] = [dx[next] + start_x, dy[next] + start_y];
      if (nx >= n || ny >= n || visited[nx][ny] !== 0) break;
      [start_x, start_y] = [nx, ny];
      cnt += 1;
    }
    next = (next + 1) % 3;

    [start_x, start_y] = [dx[next] + start_x, dy[next] + start_y];
    loop -= 1;
    cnt += 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] !== 0) {
        answer.push(visited[i][j]);
      }
    }
  }

  return answer;
}
