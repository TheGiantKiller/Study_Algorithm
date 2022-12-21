// 올바른 문자열인지확인
const isValid=(p)=>{
    let stack=[]
    for(let i=0;i<p.length;i++){
        if(stack.length===0){
            stack.push(p[i])
        }
        else{
            let top=stack[stack.length-1]
            if(p[i]===')' && top==='('){
                stack.pop()
            }
            else{
                stack.push(p[i])
            }
        }
    }
    return stack.length===0 ? true : false
}
// 문자열 w를 u,v로 분리
const p_split=(w)=>{
    let tmp=[...w]
    let [left,right]=[0,0]
    for(let i=0;i<tmp.length;i++){
        if(left>=1 && right>=1 && left===right){
            return i
        }
        if(tmp[i]==='('){
            left+=1
        }
        else{
            right+=1
        }
    }
    return w.length
}
const u_change=(u)=>{
    let tmp=[...u]
    let new_p=[]
    tmp.shift()
    tmp.pop()
    for(let i=0;i<tmp.length;i++){
        if(tmp[i]==='('){
            new_p.push(')')
        }
        else{
            new_p.push('(')
        }
    }
    return new_p.join("")
}


const dfs=(w)=>{
    if(w.length===0){
        return ""
    }
    // 2. 문자열 w를 u와 v로 분리한다.
    let u_idx=p_split(w)
    let u=w.slice(0,u_idx)
    let v=w.slice(u_idx,w.length)

    // 3 . u가 올바른 문자열이면 v에대해 다시 1단계부터 수행
    if(isValid(u)){
        u+=dfs(v)
    }
    // 4. u가 올바르지 않으면
    else{
        let str="("
        str+=dfs(v)
        str+=')'
        // u의 첫번째와 마지막 문자를 제거하고 나머지 문자열의 괄호방향을 뒤집고 반환
        str+=u_change(u)
        return str
    }

    return u
}

function solution(p) {
    let answer = '';
    if(isValid(p)){
        return p
    }
    answer=dfs(p)
    console.log(answer)
    
    return answer;
}
solution("(()())()")
solution(')(')
solution("()))((()")