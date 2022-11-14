/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

// 문제풀이 
// unit이 큰 순서대로 정렬한다음 boxcount를 더해줌
// boxcount가 초과하면 break


 var maximumUnits = function(boxTypes, truckSize) {
  let count=0
  let answer=0
  boxTypes.sort((a,b)=>b[1]-a[1]).some((box)=>{
    const [boxcount,unit]=box
    for(let i=0;i<boxcount;i++){
      answer+=unit
      count+=1
      if(count===truckSize){
        return true
      }
    }
  })
  return answer
}

console.log(maximumUnits([[1,3],[2,2],[3,1]],4)) //8

console.log(maximumUnits(([[5,10],[2,5],[4,7],[3,9]]),10))