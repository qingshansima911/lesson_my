const nums = [-1, 0, 1, 2, -1, -4]
// [[-1, 0, 1] [-1, -1, 2]]
// 双指针
const threeSum = function (nums) {
    let res = []
    // 从小到大 
    nums = nums.sort((a, b) => {
        return a - b
    })
    // console.log(nums);
    // 缓存数组长度
    const len = nums.length
    for (let i = 0; i < len - 2; i++) {
        // 左指针j
        let j = i + 1;
        let k = len - 1;
        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        // 右指针k
        while (j < k) {
            // 三数之和小于0，左指针前进
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            } else {
                res.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            }
        }
    }
    return res
}
console.log(threeSum(nums));