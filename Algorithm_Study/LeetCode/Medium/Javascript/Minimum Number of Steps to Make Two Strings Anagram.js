/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const counting_array=(string,counting_array)=>{
  for(let i=0;i<string.length;i++){
    const alpha=string.charCodeAt(i)-97
    counting_array[alpha]+=1
  }
}

var minSteps = function(s, t) {

  let s_count=new Array(26).fill(0)
  let t_count=new Array(26).fill(0)
  
  counting_array(s,s_count)
  counting_array(t,t_count)
  let diff=0

  for(let i=0;i<=26;i++){
    if(t_count[i]!==s_count[i]){
      diff+=Math.abs(s_count[i]-t_count[i])
    }
  }
  let answer=0
  answer=Math.floor(diff/2)
  return answer
  
};

minSteps("bab","aba")

minSteps("leetcode","practice")
minSteps("anagram","mangaar")