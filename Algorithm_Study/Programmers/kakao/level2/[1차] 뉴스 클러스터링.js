// 핵심 솔루션 map으로 집합을 센다

// 1. 두글자 씩 끊어서 다중 집합을 만듬 (영문자로 된 글자쌍만 유효)
// 2. 대소문자 차이 무시
const isValid=(word)=>{
  if(word.charCodeAt(0)>=65 && word.charCodeAt(0)<=90){
    return true
  }
  return false
}
const make_word_set=(word)=>{
  let newWord=[]
  for(let i=0;i<word.length-1;i++){
    const [a,b]=[word[i].toUpperCase(),word[i+1].toUpperCase()]
    if(isValid(a) && isValid(b)){
      newWord.push(a+b)
    }
  }
  return newWord 
}

const make_answer=(str1,str2)=>{
  let union=0
  let new_str1=[...str1]
  let new_str2=[...str2]
  let intersection=0
  // union
  // str1 이랑 str2 둘다 같은 알파벳이면 둘중 큰거를 넣음 
  // str1 이랑 str2 둘다 다른 알파벳이면 둘다넣음

  new_str1.forEach(e => {
    const [alpha,cnt]=e    
    if(str2.has(alpha)){
      union+=Math.max(str2.get(alpha),cnt)
    }
    else{
      union+=cnt
    }
  }) 
  //str2 남은거넣기
  new_str2.forEach(e => {
    const [alpha,cnt]=e    
    if(!str1.has(alpha)){
      union+=cnt
    }
  })


  // intersection
  //str1===str2 만 넣는다
  new_str2.forEach(e => {
    const [alpha,cnt]=e    
    if(str1.has(alpha)){
      intersection+=Math.min(str1.get(alpha),cnt)
    }
  });

  let answer=intersection/union
  answer*=65536
  answer=Math.floor(answer)
  return answer
}
const count_map=(word,map)=>{
  for(let i=0;i<word.length;i++){
    if(map.has(word[i])){
      map.set(word[i],map.get(word[i])+1)
    }
    else{
      map.set(word[i],1)
    }
  }
}

function solution(str1, str2) {
  var answer = 0;
  
  str1=make_word_set(str1)
  str2=make_word_set(str2)

  let str1_count=new Map()
  let str2_count=new Map()
  count_map(str1,str1_count)
  count_map(str2,str2_count)
  if(str1_count.size===0 && str2_count.size===0){
    return 65536
  }
  answer=make_answer(str1_count,str2_count)

  return answer;
}