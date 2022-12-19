// 시간초과 떠서 50%에서 다른사람 풀이참고

function solution(ingredient) {
    let answer = 0;
    let stack=[]


    for(let i=0;i<ingredient.length;i++){
      stack.push(ingredient[i])
      if(stack.length>=4){
        const str=stack.slice(-4).join(''); //스택에있는거 뒤에 4개짜름
        if(str==='1231'){
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            answer+=1
        }
      }
    }
    return answer
}
solution([2, 1, 1, 2, 3, 1, 2, 3, 1])
solution([1, 3, 2, 1, 2, 1, 3, 1, 2])