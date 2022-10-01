function solution(survey, choices) {
    let answer = ""
    let boardScore={'R':0,'F':0,'J':0,'N':0,'T':0,'C':0,'M':0,'A':0}


    for (let i = 0; i < survey.length; i++){
        let tmp = calculate(survey[i], choices[i])
        let alpha = tmp[0][0]
        let score=tmp[0][1]
        boardScore[alpha]+=score
    }
    // 점수 계산

    answer+=compareScore('R','T',boardScore)
    answer+=compareScore('C','F',boardScore)
    answer+=compareScore('J','M',boardScore)
    answer+=compareScore('A','N',boardScore)


    return answer

}
const compareScore = (word_a, word_b,boardScore) => {
    if (boardScore[word_a] > boardScore[word_b]) {
       return word_a
    }
    else if (boardScore[word_a] === boardScore[word_b]) {
        if (word_a.charCodeAt(0) < word_b.charCodeAt(0)) {
            return word_a
        }
        else {
            return word_b
        }
    }
    else {
        return word_b
    }
    
}


// 두개중 점수 높은 알파벳 반환
const calculate = (word,choices) => {
    let word_a = word[0]
    let word_b = word[1]
    
    let score_a=0
    let score_b = 0
    let s=[]
    let scoreBoard = [3, 2, 1, 0, 1, 2, 3]
    choices-=1
    
    if (choices >= 4) {
        score_b+=scoreBoard[choices]    
    }
    else {
        score_a+=scoreBoard[choices]
    }


    if (score_a > score_b) {
        s.push([word_a,score_a])
        return s    
    }
    else if (score_a == score_b) {
        if (word_a.charCodeAt(0) < word_b.charCodeAt(0)) {
            s.push([word_a,score_a])
            return s
        }
        else {
            s.push([word_b,score_b])
            return s
        }
    }
    else {
        s.push([word_b,score_b])
        return s
    }

    

    
}


solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])
solution(["TR", "RT", "TR"],[7, 1, 3])