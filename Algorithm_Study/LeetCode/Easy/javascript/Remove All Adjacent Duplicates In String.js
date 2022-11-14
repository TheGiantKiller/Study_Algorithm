var removeDuplicates = function(s) {
  let stack=[s[0]]
  let answer=""
  for(let i=1;i<s.length;i++){
    if(stack.length >0 && s[i]===stack[stack.length-1]){
      stack.pop()
    }
    else{
      stack.push(s[i])
    }
  }
  answer=stack.join('')
  console.log(answer)

};

removeDuplicates("abbaca")
removeDuplicates("azxxzy")