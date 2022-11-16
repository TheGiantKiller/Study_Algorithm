/**
 * @param {number[][]} nums
 * @return {number[]}
 */


// 배열에서 i+j는 대각선에 있는 요소임을 알수 있다 , (i+j)
// 문제에서는 행이 아닌 열 의 대각선 요소를 먼저 출력해야되므로 reverse를해주었다.

 var findDiagonalOrder = function(nums) {
  let answer=[]
  let list=Array.from(Array(10001),()=>[])
  let max_number=0
  for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums[i].length;j++){
      list[i+j].push(nums[i][j])

      max_number=Math.max(max_number,i+j)
    }
  }
  for(let i=0;i<=max_number;i++){
    list[i].reverse()
    for(let j=0;j<list[i].length;j++){
      answer.push(list[i][j])
    }
  }
  return answer
};

findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])
// findDiagonalOrder([[1,2,3],[4],[5,6,7],[8],[9,10,11]])

// findDiagonalOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]])