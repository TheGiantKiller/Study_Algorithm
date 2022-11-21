/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */


// 양방향 그래프 
// 1. 현재 방문할곳이 다음에 방문할곳이랑 color가 같으면 같은그룹이다  ,
//  양방향 그래프 
// 즉 colors배열로 매핑을하고 다음에 방문할곳이 같은 color이면 같은 그룹이므로 안됨

const dfs=(graph,visited,color,cur)=>{
  visited[cur]=true
  for(let i=0;i<graph[cur].length;i++){
      let next=graph[cur][i]
      if(!visited[next]){
        color[next]=3-color[cur]
        if(!dfs(graph,visited,color,next)){
          return false
        }
      }
      else if(color[cur]===color[next]){
        return false
      }
    }
    return true
  }



var possibleBipartition = function(n, dislikes) {
    let graph=Array.from(new Array(n+1),()=>[])
    let color=new Array(n+1).fill(0)
    let visited=new Array(n+1).fill(0)

    for(let i=0;i<dislikes.length;i++){
      const [a,b]=dislikes[i]
      graph[a].push(b)
      graph[b].push(a)

    }

    for(let i=1;i<=n;i++){
      if(color[i]===0){
        color[i]=1
        if(!dfs(graph,visited,color,i)){
          return false
        }
      }
    }

    return true
};

console.log(possibleBipartition(4,[[1,2],[1,3],[2,4]]))
console.log(possibleBipartition(3,[[1,2],[1,3],[2,3]]))