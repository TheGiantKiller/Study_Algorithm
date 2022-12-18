// LRU 캐시 => 가장 오래전에 사용된 데이터를 제거하고 새로운데이터 삽입
// 큐사용 
// 새로운 데이터 인경우 캐시에 넣어주고 가득차있으면 오래된거 제거 miss , pop() 
// 새로운 데이터가 아닌경우 제거후 맨앞에 다시삽입 
// 캐시 사이즈가 작을떄 새로운 데이터 처리
const new_data=(queue,city)=>{
     queue.unshift(city)
    return
}
// 새로운 데이터가 아니면
const dup_data=(queue,city)=>{
    let new_queue=queue.filter((e)=>e!==city)
    new_queue.unshift(city)
    return new_queue
}


function solution(cacheSize, cities) {
    let queue=[]
    let answer=0

    for(let i=0;i<cities.length;i++){
        let city=cities[i].toUpperCase()
        if(queue.length>cacheSize){
            queue.pop()
         }
        if(!queue.includes(city)){
            new_data(queue,city)
            answer+=5
        }
        else{
            queue=dup_data(queue,city)
            answer+=1
        }
    }
    return answer;
}
solution(0,["LA","LA"])
// solution(3,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	)
// solution(3,["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])