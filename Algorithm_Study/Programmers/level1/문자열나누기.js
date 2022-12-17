function solution(s) {
    var answer = 0;
    let x=[]
    let other=0
    s=s.split('')

    for(let i=0;i<s.length;i++){
      let cur=s[i]
      if(x.length===0 || cur===x[x.length-1]){
        x.push(cur)
      }
      else{ //다르면
      other+=1
      if(x.length===other){
        x=[]
        other=0
        answer+=1
      }     
    }
  }
  return x.length>0?answer+1 : answer
 }
solution("banana")
solution("abaabc")
solution("abracadabra")
solution("aaabbaccccabba")