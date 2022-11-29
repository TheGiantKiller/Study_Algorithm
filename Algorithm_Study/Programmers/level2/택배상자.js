// 스택 = 보조컨테이너 벨트
// 순서가 맞아야 컨테이너 벨트에서 뺄수있음

function solution(order) {
  let idx=0

  let conveyerBelt=[...order].sort((a,b)=>a-b)
  let stack=[]   // 보조 컨테이너 벨트
  let answer=0
  // 해당 숫자보다 작을떄까지 stack에 push
  // 해당 숫자가 나오면pop
  for(let i=0;i<conveyerBelt.length;i++){
    if(stack.length>0 && stack[stack.length-1]===order[idx]){
      while(stack.length>0 && stack[stack.length-1]===order[idx]){
        stack.pop()
        idx+=1
        answer+=1
      }
    }
    // 컨테이너 벨트의 맨앞의 놓인 상자가 현재 트럭에 실어야하는순서가아니면 
    stack.push(conveyerBelt[i])
} 
  // 예외 처리
  while(stack.length>0 && stack[stack.length-1]===order[idx]){
    stack.pop()
    idx+=1
    answer+=1
  }
  return answer;
}

console.log(solution([4, 3, 1, 2, 5]))
console.log(solution([5, 4, 3, 2, 1]	))