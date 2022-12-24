let answer=-1
const dfs=(current_p,dungeons,depth,visited)=>{
    for(let i=0;i<dungeons.length;i++){
        const [min_p,p]=dungeons[i]
        if(visited[i])continue
        if(current_p>=min_p){
            visited[i]=true
            dfs(current_p-p,dungeons,depth+1,visited)
            visited[i]=false
        }
    }
    answer=Math.max(answer,depth)
    return
}
function solution(k, dungeons) {
    let visited=new Array(dungeons.length).fill(false)
    dfs(k,dungeons,0,visited)
    return answer;
}
solution(80,[[80,20],[50,40],[30,10]])