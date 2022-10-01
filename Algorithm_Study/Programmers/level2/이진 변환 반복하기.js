let count=0
const convert = (number) => {

    let tmp = [...number].filter((n) => n !== '0').join('')
    let newNumber = tmp.length
    count+=number.length-newNumber
    let n=""
    while (newNumber != 0) {
        n += String(newNumber % 2)
        newNumber=Math.floor(newNumber/2)
    }
    n=[...n].reverse().join('')

    
    return n
}
const check = (number) => {
    
    
    if (number!=='1') {
        return true
    }

    return false
}
function solution(s) {
    let answer = [];
    let number = s
    let cnt=0
    while (check(number)) {
        number = convert(number)
        cnt+=1
    }
    
    answer.push(cnt)
    answer.push(count)
    return answer;
}
solution("01110")