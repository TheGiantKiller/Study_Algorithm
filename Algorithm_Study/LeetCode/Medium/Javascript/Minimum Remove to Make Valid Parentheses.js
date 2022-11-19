/**
 * @param {string} s
 * @return {string}
 */

//  스택에 남는 괄호는 올바르지 않은 쌍을 가지므로 남는 괄호에 대한 index만 제외하고 정답을 추가시킴
 var minRemoveToMakeValid = function(s) {
    let stack=[]
  
    for(let i=0;i<s.length;i++){
      if(stack.length===0){
        if(s[i]==='(' || s[i]===')'){
          stack.push([s[i],i])
        }
      }
      else{
        let [top,idx]=stack[stack.length-1]
        if(s[i]===')' || s[i]==='('){
          if(top==='(' && s[i]===')'){
            stack.pop()
            continue
          }
          else{
            stack.push([s[i],i])
          }

        }
      }
    }
    let answer="";
    for(let i=0;i<s.length;i++){
     const isValid=stack.findIndex((item)=>item[1]===i)
      if(isValid===-1){
        answer+=s[i]
      }
    }
   return answer

};

minRemoveToMakeValid("lee(t(c)o)de)")
minRemoveToMakeValid("a)b(c)d")
minRemoveToMakeValid("))((")
