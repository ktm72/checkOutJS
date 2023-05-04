//sorted array
function binarySearch(nums, n) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = ~~((l + r) / 2); // Math.floor();
    if (nums[mid] === n) {
      return true;
    }
    if (nums[mid] < n) {
      l = mid + 1; // right search
    } else {
      // nums[mid] > n
      r = mid - 1; // left search
    }
  }

  return false;
} // time complexity - O(log(n))

console.log(binarySearch([2, 5, 6, 7, 8, 9, 10], 9)); // true
console.log(binarySearch([2, 5, 6, 7, 8, 9, 10], 6)); // true
console.log(binarySearch([2, 5, 6, 7, 8, 9, 10], 4)); // false
