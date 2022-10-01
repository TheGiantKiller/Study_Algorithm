function solution(queue1, queue2) {
    let count=0
    let queue = [...queue1, ...queue2]
    let queue1Sum =queue1.reduce((acc,cur)=>acc+=cur)
    let queue2Sum =queue2.reduce((acc,cur)=>acc+=cur)

    let len=queue1.length*3
    let mid = Math.floor(queue.length / 2)
    let start=0
    
    
    // 두개의 큐의 균형을 잡는다 
    // queue1이 크면 queue1꺼를 뺴고 queue2에 넣고
    // queue2가 크면 queue2꺼를 빼고 queue1에 넣음 

    for (let i = 0; i < len; i++){
        // queue1에 있는거를 빼서 queue2에 넣음 
        if (queue1Sum > queue2Sum) {
            queue1Sum -= queue[start]
            queue2Sum+=queue[start++]
            count+=1
        }
        else if (queue1Sum === queue2Sum) {
            return count
        }
            
            // queue2에있는거를 뺴서 queue1에넣음
        else if (queue1Sum < queue2Sum) {
            queue2Sum -= queue[mid]
            queue1Sum+=queue[mid++]
            count+=1
        }
        mid %= queue.length
        start%=queue.length
    }

    return -1;
}
//solution([3, 2, 7, 2],[4, 6, 5, 1])
solution([1, 2, 1, 2],[1, 10, 1, 2])