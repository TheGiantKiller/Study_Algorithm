/**
 * @param {number[]} nums
 * @return {number}
 */

// pivot index는 현재 인덱스 왼쪽에있는것의합과 현재인덱스 오른쪽에있는것의합이 같으면된다
// 현재 인덱스 까지의 합에서 - 현재숫자 = left sum
// 총합 - 현재 인덱스까지의 합 = right sum 
 var pivotIndex = function(nums) {
    let sum=0 
    let prefix_sum_array=[]
    for(let i=0;i<nums.length;i++){
      sum+=nums[i]
      prefix_sum_array.push(sum)
    }

    for(let i=0;i<nums.length;i++){
      let left_sum=prefix_sum_array[i]-nums[i]
      let right_sum=sum-prefix_sum_array[i]
      if(left_sum===right_sum){
        return i
      }
    }
  
    return -1
};

pivotIndex([1,7,3,6,5,6])