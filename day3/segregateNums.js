//segregate odd & even numbers in a given arrays
function swap(arr, i1, i2) {
  let temp = arr[i1]; // 3
  arr[i1] = arr[i2]; // 3 is replaced by 8
  arr[i2] = temp; // 8 is replaced by 3
  return arr;
}

function segregateNums(nums) {
  const len = nums.length;
  let l = 0,
    r = len - 1;
  while (l < r) {
    if (nums[l] % 2 === 0) {
      l++;
      continue;
    }
    if (nums[r] % 2 !== 0) {
      r--;
      continue;
    }
    swap(nums, l, r);
  }
  return nums;
}

console.log(segregateNums([2, 4, 3, 6, 7, 8, 1])); //[2,4,6,8, 7,3, 1]
