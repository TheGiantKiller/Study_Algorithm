const isAlpha = (alpha) => {
    if (alpha >= 'A' && alpha <= 'Z') {
        return true
    }
    return false
}
const divide = (s) => {
    const tmp=[]
    for (let i = 0; i < s.length-1; i++){
        let a = s[i].toUpperCase()
        let b= s[i+1].toUpperCase()
        if (isAlpha(a) && isAlpha(b)) {
           tmp.push(a+b)
        }
    }
    return tmp
}
function MultiUnionSet(set1, set2) {
    let m_set=[]
    if (set1.length > set2.length) {
        for (let i = 0; i < set1.length; i++){
            if (set1[i] === set2[i]) {
                m_set.push(set1[i])
            }
            else {
                if (set2[i] !== undefined) {
                    m_set.push(set2[i])
                }
                m_set.push(set1[i])
            }
        }
    }
    else {
         for (let i = 0; i < set2.length; i++){
            if (set1[i] === set2[i]) {
                m_set.push(set1[i])
            }
            else {
                if (set1[i] !== undefined) {
                    m_set.push(set1[i])
                }
                m_set.push(set2[i])
            }
        }
    }
    return m_set
}
function MultiIntSet(set1, set2) {
        let m_set=[]
    if (set1.length > set2.length) {
        for (let i = 0; i < set1.length; i++){
            if (set1[i] === set2[i]) {
                m_set.push(set1[i])
            }
        }
    }
    else {
         for (let i = 0; i < set2.length; i++){
            if (set1[i] === set2[i]) {
                m_set.push(set1[i])
            }
        }
    }
    return m_set
    
}

function solution(str1, str2) {
    let answer = 0;
    let str1Set;
    let str2Set;

    str1Set = divide(str1)
    str2Set = divide(str2)
    str1Set.sort()
    str2Set.sort()
    const a = MultiUnionSet(str1Set, str2Set)
    const b = MultiIntSet(str1Set, str2Set)

    let union = a.length 
    let inter=b.length
    if (union === 0 && inter === 0) {
        return 65536
    }

    answer = inter/union
   
     answer *= 65536
  
    answer = Math.floor(answer)

    return answer;
}
solution("handshake","shake hands")