/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// step 1: 두 문자열에 대한 문자 카운팅 배열을 만들어서 문자에 대해 카운팅
// step 2 :문자 카운팅배열에서 서로 다른 문자열의 개수를 찾아서 누적시킴
// step 3 :누적시킨거 /2 할경우 답

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