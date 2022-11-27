
// 하나의 인덱스의 기준점의 왼쪽에있는 숫자들과 오른쪽에 있는 숫자들이 같기만하면 되니 set을이용
// 배열길이가 백만개라서 일반적인 방법으로 시간초과뜸 


// 하나의 배열에 몰빵하여 카운팅하고 하나의 set에 topping을 싹다집어넣음
// 그이후 반복문을 돌리면서 몰빵한 곳에 하나씩 빼주고 빈값에 하나씩 추가해줌
// 그렇게하다보면 사이즈가 같은지점이 나오는데 그게 정답이됨

function solution(topping) {
  var answer = 0;
  const b=new Array(10001).fill(0)
  const a_set=new Set()
  const b_set=new Set()

  for(let i=0;i<topping.length;i++){
    let number=topping[i]
    b[number]+=1
    b_set.add(number)
  }

  for(let i=0;i<topping.length;i++){
    let number=topping[i]
    if(b[number]!==0){
      b[number]-=1
      a_set.add(number)
    }
    if(b[number]===0){
      b_set.delete(number)
    }

    if(a_set.size===b_set.size){
      answer+=1
    }
  }

  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2])
solution([1, 2, 3, 1, 4])