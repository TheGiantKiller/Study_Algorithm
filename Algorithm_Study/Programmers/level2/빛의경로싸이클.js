// 나중에 다시 

function next_pos(c_x, c_y, c_d, direction, r, c) {
    let tmp=[]
    let nx = 0
    let ny = 0
    let n_dir=0
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    

    // 방향 안바뀜
    if (direction === 'S') {
        nx = c_x + dx[c_d]
        ny = c_y + dy[c_d]
        n_dir=c_d
    }
    else if (direction === 'R') {
        n_dir = (c_d + 1) % 4 
        nx = c_x + dx[n_dir]
        ny= c_y+ dy[n_dir]
    }
        
    else {
        if (c_d === 0) {
            n_dir=3
        }
        else if (c_d === 3) {
            n_dir=2
        }
        else if (c_d === 2) {
            n_dir=1
        }
        else if (c_d === 1) {
            n_dir=0
        }
        nx = c_x + dx[n_dir]
        ny = c_y + dy[n_dir]
    }
    if (nx < 0) {
        nx=r-1
    }
    else if (nx ===r) {
        nx=0
    }
    if (ny < 0) {
        ny=c-1
    }

    else if (ny === c) {
        ny=0
    }
    tmp.push([nx,ny,n_dir])

    return tmp
}

function solution(grid) {
    var answer = [];
    let [r, c] = [grid.length, grid[0].length]
    
    const visited = Array.from(new Array(r).fill(0), () => new Array(c).fill(0))
    for (let i = 0; i < r; i++){
        for (let j = 0; j < c; j++){
            visited[i][j]=new Array(4).fill(0)
        }
    }

    
    for (let i = 0; i < r; i++){
        for (let j = 0; j < c; j++){
            for (let dir = 0; dir < 4; dir++){
                let [nx, ny, ndir] = [i, j, dir]
                if(visited[nx][ny][ndir])continue
                let cnt=0
                while (!visited[nx][ny][ndir]) {// 싸이클이 형성 안될떄까지
                    visited[nx][ny][ndir]=true
                    cnt+=1
                    let tmp = next_pos(nx, ny, ndir, grid[nx][ny],r,c)
                    nx = tmp[0][0]
                    ny = tmp[0][1]
                    ndir=tmp[0][2]
                }
                answer.push(cnt)
            }
        }
    }

    answer.sort((a,b)=>a-b)
    return answer;

}
