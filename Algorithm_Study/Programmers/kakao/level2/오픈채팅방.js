function solution(record) {
    var answer = [];
    let map=new Map()

    for(let i=0;i<record.length;i++){
        const [cmd,id,user]=record[i].split(' ')
        if(cmd==='Enter' || cmd==='Change'){
            map.set(id,user)
        }
    }
    for(let i=0;i<record.length;i++){
        const [cmd,id,user]=record[i].split(' ')
        let str=""
        if(cmd==='Enter'){
            str=`${map.get(id)}님이 들어왔습니다`
            answer.push(str)
        }
        else if(cmd==='Leave'){
            str=`${map.get(id)}님이 나갔습니다.`         
            answer.push(str)    
        }
    }

    return answer;
}
solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])