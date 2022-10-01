const convert = (s, len) => {
    let tmp = []
    let newString=""
    let idx = 0

    //  len 길이 만큼 문자열을 잘라서 배열에 넣음 
    while (idx < s.length) {
        let tmpString = s.substr(idx, len)
        tmp.push(tmpString)
        idx+=len
    }

    // 배열에 있는 값으로 문자열을 압축시킴 
    let cnt = 1
    for (let i = 1; i < tmp.length; i++){
        if (tmp[i] === tmp[i - 1]) {
            cnt+=1    
        }
        else {
            if (cnt > 1) {
                newString += String(cnt) + tmp[i - 1]
            }
            else {
                newString+=tmp[i-1]    
            }
            cnt = 1
        }
    }

    // 맨마지막 문자열 남는거 처리 
    if (cnt > 1) {
        newString+=String(cnt)+tmp[tmp.length-1]
    }
    else {
        newString+=tmp[tmp.length-1]
    }
    return newString.length

    
}
function solution(s) {
    let answer = Infinity
    let len = s.length
    if (len === 1) {
        return 1
    }

    for (let i = 1; i <len; i++){
        let cnt = convert(s, i)
        answer=Math.min(cnt,answer)
    }

    return answer;
}