/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

 var asteroidCollision = function(asteroids) {
  let stack=[]
  
  // 양의 방향 -> 음의방향 <-
  for(let i=0;i<asteroids.length;i++){
    if(stack.length===0){
      stack.push(asteroids[i])
    }
    else{
      while(true){
        let top=stack[stack.length-1]
        let asteorid=asteroids[i]
        // 충돌이 가능할수있는 상황
        if(top>0 && asteorid<0){
          // 두개다 충돌이 가능하므로 반복문탈출
          if(Math.abs(top)===Math.abs(asteorid)){
            stack.pop()
            break
          }
          // 현재 소행성이 더크면 원래있던거 없애버림
          else if(Math.abs(top)<Math.abs(asteorid)){
            stack.pop()
          }
          // 들어오는소행성이 작으니까 push시킬 필요가없음
          else{
            break
          }
        }
        // 충돌이 불가능하니까 그냥 넣어버림
        else {
          stack.push(asteorid)
          break
        }
      }

      
    }

  }
  return stack
};

asteroidCollision([-2,1,1,-2])
asteroidCollision([-2,-2,1,-1])
asteroidCollision([-2,-2,1,-2])
asteroidCollision([5,10,-5])
asteroidCollision([8,-8])
asteroidCollision([10, 2, -5])