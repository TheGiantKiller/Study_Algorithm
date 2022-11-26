/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// s와 t라는 문자열이있을떄 
// s의 서브 문자열이 t에 속하는지 확인해야함 이떄 s의 서브문자열의 순서는 t에있는문자열의 순서와 일치해야 한다

// dp[i]= 서브문자열의 값 

// dp 마지막 문자열의개수 와 s값이 일치 하지 않으면 연속된 서브 문자열일수가없음

 var isSubsequence = function(s, t) {
  let dp=new Array(101).fill(0)
  // orders는 서브문자열의 순서가 맞는지 확인하기위해 순서를 담는 배열
  let orders=[]
 
  if(s.length===0){
    return true
  }
  
  for(let i=0;i<s.length;i++){
    orders.push(s[i])
  }

  let end=0
  for(let i=0;i<s.length;i++){
    while(end<t.length){
      if(s[i]===t[end]){
        if(orders[i]===s[i]){
          if(i==0){
            dp[i]=1
            end+=1
          }
          else{
            dp[i]=dp[i-1]+1
            end+=1
          }
        }
        else{
          return false
        }
        break
      }
      end+=1
    } 
  }
  return dp[s.length-1]===s.length ? true : false   
};
