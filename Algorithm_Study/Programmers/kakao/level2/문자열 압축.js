// len 단위로 문자열 압축 자른다.
const zip=(s,len)=>{
    let prev=s.substring(0,len)
    let end=0+len
    if(end>=s.length)return false
    let tmp=[prev]
    let zip_word=""
    while(end<s.length){
        let current=s.substring(end,end+len)
        if(prev===current){
            tmp.push(current)
        }
        else{
            if(tmp.length>1){
                zip_word+=tmp.length.toString()+prev
            }
            else{
                 zip_word+=prev
            }
            tmp=[current]
        }
        prev=current
        end+=len
    }

    if(tmp.length>1){
        zip_word+=tmp.length.toString()+prev
    }
    else{
        zip_word+=prev
    }
    return zip_word


}

function solution(s) {
    let answer = Infinity;
    if(s.length===1) return 1
  
    for(let i=0;i<s.length;i++){
        let zip_word=zip(s,i+1)
        if(zip_word){
            answer=Math.min(zip_word.length,answer)
        }

    }
    
    return answer;
}

solution("a")