/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 3개를 더했을떄 합이 0 인것
// 투포인터는 배열탐색의 시간복잡도를 줄여준다.

var threeSum = function (nums) {
  let answer = [];
  let noduplicate = new Set();
  nums.sort((a, b) => a - b); //  1. 일단정렬하자

  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (end > start) {
      let sum = nums[i] + nums[start] + nums[end];
      let sum_string = nums[i].toString() + nums[start].toString() + nums[end].toString();
      if (sum === 0) {
        if (!noduplicate.has(sum_string)) {
          answer.push([nums[i], nums[start], nums[end]]);
          noduplicate.add(sum_string);
        }
        end -= 1;
      } else if (sum < 0) {
        start += 1;
      } else if (sum > 0) {
        end -= 1;
      }
    }
  }
  console.log(answer);
  return answer;
};

//threeSum([-1, 0, 1, 2, -1, -4]); //[[-1,-1,2],[-1,0,1]]
//threeSum([0, 1, 1]); // []
//threeSum([0, 0, 0]); // [0,0,0]
//threeSum([0, 0, 0, 0]); // [0,0,0,0]
threeSum([-2, 0, 1, 1, 2]);
