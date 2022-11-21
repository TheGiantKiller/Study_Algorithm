/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let answer=0
  let [cur,pre]=[1,0]
  

  for(let i=1;i<s.length;i++){
      if(s[i]===s[i-1]){
        cur+=1
      }
      else{
        answer+=Math.min(cur,pre)
        pre=cur
        cur=1
      }
  }
  console.log(answer+Math.min(cur,pre))

  return answer
};
countBinarySubstrings("00110011")
countBinarySubstrings("10101")