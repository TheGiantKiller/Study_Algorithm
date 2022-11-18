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
        if(top>0 && asteorid<0){
          if(Math.abs(top)===Math.abs(asteorid)){
            stack.pop()
            break
          }
          // 소행성이 더크면 
          else if(Math.abs(top)<Math.abs(asteorid)){
            stack.pop()
          }
          else{
            break
          }
        }
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