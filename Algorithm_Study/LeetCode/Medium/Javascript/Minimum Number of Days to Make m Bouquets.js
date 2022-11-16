/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const isValid=(currentday,bloomDay,k,m)=>{
  // k개당 부케 1개 만들수있음 m을 만족시켜야함
  let cnt=0
  let bukae=0
  for(let i=0;i<bloomDay.length;i++){
    if(currentday>=bloomDay[i]){
      cnt+=1
    }
    else{
      cnt=0
    }

    if(cnt===k){
      bukae+=1
      cnt=0
    }

  }
  if(m<=bukae){
    return true
  }
  
  return false
}
var minDays = function(bloomDay, m, k) {
  if(bloomDay.length<m*k){
    return -1
  }

  let [left,right]=[Math.min(...bloomDay),Math.max(...bloomDay)]
  let answer=0
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(isValid(mid,bloomDay,k,m)){
      answer=mid
      right=mid-1
    }
    else{
      left=mid+1
    }
  }
  return answer
    
};


minDays([1,10,3,10,2],3,1)
minDays([1,10,3,10,2],3,2)
minDays([7,7,7,7,12,7,7],2,3)