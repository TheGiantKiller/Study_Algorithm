/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

//  k개를 지웠을떄 배열안에 있는 숫자가 최소 개수가 되게 만들어야한다 
//  k가 만족할때 arr에있는 숫자가 적은것들을 먼저 없애주면 문제의 조건을 만족시킬수있음 (그리디)
//  Map 자료구조로 arr 있는것을 카운팅하고 이를 기반으로 k개를 하나씩빼주면서 답을 찾음

 var findLeastNumOfUniqueInts = function(arr, k) {
  let counting=new Map()
  let cnt=k
  for(let i=0;i<arr.length;i++){
    let number=arr[i]
    if(counting.get(number)===undefined){
      counting.set(number,1)
    }
    else{
      counting.set(number,counting.get(number)+1)
    }
  }
  counting=[...counting].sort((a,b)=>a[1]-b[1])

  for(let i=0;i<counting.length;i++){
    while(counting[i][1]){
      if(cnt===0)break
      counting[i][1]-=1
      cnt-=1
    }
  }
  let answer=0
 for(let i=0;i<counting.length;i++){
    if(counting[i][1]>=1){
      answer+=1
    }
 }
  return answer

};