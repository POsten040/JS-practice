//https://leetcode.com/problems/remove-element/

//loop through nume
//if equal to val copy next el
//append "" to array
//if not equal leave in place

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  while(nums.indexOf(val) != -1){
      nums.splice(nums.indexOf(val), 1)
  }
  return nums.length
};

const a = [0,1,2,2,3,0,4,2]
const v = 2
console.log(removeElement(a, v))