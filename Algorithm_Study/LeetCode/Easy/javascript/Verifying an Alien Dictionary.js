/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// 120 / 112
//https://leetcode.com/problems/verifying-an-alien-dictionary/
 var isAlienSorted = function(words, order) {
  const dict=new Array(28).fill(0)
  let cnt=1
  for(let i=0;i<order.length;i++){
    const alpha=order.charCodeAt(i)-97
    dict[alpha]=cnt
    cnt+=1
  }

  let newWords=[]
  for(let i=0;i<words.length;i++){
    let tmp=""
    for(let j=0;j<words[i].length;j++){
      const alpha=words[i][j].charCodeAt(0)-97
      tmp+=dict[alpha].toString()
    }
    newWords.push(tmp)
    
  }
  let newWords2=[...newWords].sort()

  for(let i=0;i<newWords.length;i++){
    if(newWords[i]!==newWords2[i]){
      return false
    }
  }

  return true
    
};

// isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz")
// isAlienSorted(["word","world","row"],"worldabcefghijkmnpqstuvxyz")
// isAlienSorted(["apple","app"],"abcdefghijklmnopqrstuvwxyz")

isAlienSorted(["kuvp","q"],"ngxlkthsjuoqcpavbfdermiywz")