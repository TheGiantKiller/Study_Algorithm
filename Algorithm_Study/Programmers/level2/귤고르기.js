
// 판매하고 싶은 귤 k개의 귤을 만족시키는 최소의 과일 조합

// 중복 된 개수가 많은 귤을 제거해주면됨

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
  return answer;
}

solution(6,[1, 3, 2, 5, 4, 5, 2, 3]	)