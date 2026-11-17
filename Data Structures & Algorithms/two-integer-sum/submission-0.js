class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let output = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                if (i != j) {
                    if (nums[i] + nums[j] == target) {
                        output.push(i, j);
                    }
                }
            }
        }
        return output;
    }
}
