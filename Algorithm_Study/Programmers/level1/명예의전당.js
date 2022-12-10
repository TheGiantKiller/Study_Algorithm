class PriorityQueue {
  constructor(n) {
    this.heap = new Array(n + 1).fill(0);
    this.size = 0;
  }
  push(x) {
    // 맨 마지막에 넣음 (위로올라감)
    this.heap[++this.size] = x;
    let idx = this.size;
    while (idx != 1) {
      let parent = Math.floor(idx / 2);
      // 부모랑 비교했을떄 크거나같으면 종료 (최소힙)
      if (this.heap[parent] <= this.heap[idx]) {
        break;
      }
      // 부모랑 비교했을떄 작으면 swap
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  pop() {
    // 이진트리에서의 가장 끝값 (아래로내려감)
    this.heap[1] = this.heap[this.size--];
    let idx = 1;
    while (2 * idx <= this.size) {
      let [lc, rc] = [2 * idx, 2 * idx + 1];
      let min_child = lc;
      // 오른쪽 자식이 왼쪽보다 작으면
      if (rc <= this.size && this.heap[rc] < this.heap[lc]) {
        min_child = rc;
      }
      //커버리면
      if (this.heap[idx] <= this.heap[min_child]) {
        break;
      }
      [this.heap[idx], this.heap[min_child]] = [this.heap[min_child], this.heap[idx]];
      idx = min_child;
    }
  }
  top() {
    return this.heap[1];
  }
  length() {
    return this.size;
  }
}

// 우선순위큐 최소힙
function solution(k, score) {
  let answer = [];
  let pq = new PriorityQueue(score.length);

  // k개이상이되면 명예의전당을 갱신한다.
  for (let i = 0; i < score.length; i++) {
    if (pq.length() >= k) {
      if (pq.top() < score[i]) {
        pq.pop();
        pq.push(score[i]);
      }
    } else {
      pq.push(score[i]);
    }
    answer.push(pq.top());
  }
  return answer;
}
solution(3, [10, 100, 20, 150, 1, 100, 200]);
