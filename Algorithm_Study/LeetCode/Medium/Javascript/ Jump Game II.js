/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp=new Array(nums.length).fill(9999)
    dp[0]=0
    for(let i=1;i<nums.length;i++){
      for(let j=i-1;j>=0;j--){
        // 이전위치 +j >= 현재 i보다 크거나 같으면 이동가능
        if(nums[j]+j>=i){
          dp[i]=Math.min(dp[i],dp[j]+1)
        }
      }
    }
    return dp[nums.length-1]
};

jump([2,3,1,1,4])
jump([2,3,0,1,4])