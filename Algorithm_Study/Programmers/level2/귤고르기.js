
// 판매하고 싶은 귤 k개를 최소가 되는 tangerine조합의 개수를 구하면됨
// 중복 된 개수가 많은 귤을 우선순위로 두면될거같음

function solution(k, tangerine) {
  var answer = 0;
  const map=new Map()

  for(let i=0;i<tangerine.length;i++){
    const e=tangerine[i]
    if(!map.get(e)){
      map.set(e,1)
    }
    else{
      map.set(e,map.get(e)+1)
    }
  }
  const array=[...map].sort((a,b)=>b[1]-a[1])
  let cnt=0
  for(let i=0;i<array.length;i++){
    const [,fruitCount]=array[i]
    cnt+=fruitCount
    answer+=1
    if(cnt>=k){
      break
    }
  }
  console.log(answer)
  return answer;
}

solution(6,[1, 3, 2, 5, 4, 5, 2, 3]	)