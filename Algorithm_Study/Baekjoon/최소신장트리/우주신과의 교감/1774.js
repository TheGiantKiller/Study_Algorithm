const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(' ').map((n) => +n)
const parent = new Array(n + 1).fill(0)
const maps = new Array()
const costs=[]

for (let i = 0; i < n; i++){
    const [a, b] = input[i].split(' ').map((n) => +n)
    maps.push([a,b])
}
// 1. 1번쨰 좌표 부터 n번쨰 좌표까지 의 비용을 구해서 배열 안에 다가 집어넣음 

for (let i = 0; i < maps.length; i++){
    const [a, b] = maps[i]
    for (let j = 0; j < maps.length; j++){
        if (i == j) continue
        const [d,f]=maps[j]
        costs.push([d,f,Math.abs(a-d)+Math.abs(b-f)])
    }    
}


for (let i = 1; i <= n; i++){
    parent[i]=i
}


for (let i = n; i < n + m; i++){
    const [a, b] = input[i].split(' ').map((n) => +n)
    union(a,b)
}
costs.sort((a, b) => a[2] - b[2])
let answer = 0

for (let i = 0; i < costs.length; i++){
    const [a, b,c] = costs[i]
    if (union(a, b)) {
        answer+=c
    }
}

console.log(answer.toFixed(2))


function find(x) {
    if (parent[x] === x) {
        return x
    }
    return parent[x]=find(parent[x])
}
function union(a, b) {
    const parent_a = find(a)
    const parent_b = find(b)
    if (parent_a !== parent_b) {
        if (parent_a < parent_b) {
            parent[parent_b] = parent_a
            
        }
        else {
            parent[parent_a]=parent_b
        }
        return true
    }
    return false

}
