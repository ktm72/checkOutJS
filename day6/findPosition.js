// find first and last position of element in sorted Array
function findPosition(nums, n) {
  const left = binarySearch(nums, n, true);
  const right = binarySearch(nums, n, false);

  return [left, right];
} // 2*logn - time complexity -> O(log(n)), O(1) = space

//if leftBase is false, we are looking for right index
function binarySearch(nums, target, leftBase) {
  let l = 0,
    r = nums.length - 1;
  let i = -1; // O(1) - space
  while (l <= r) {
    const mid = ~~((l + r) / 2); // Math.floor(); // 4+6/2 = 5

    if (nums[mid] < target) {
      l = mid + 1; // right search
    } else if (nums[mid] > target) {
      r = mid - 1; // left search
    } else {
      // nums[mid] === target
      i = mid;
      if (leftBase) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return i;
} //O(logn) -time, O(1)-space

// console.log(findPosition([5, 7, 7, 8, 8, 8, 10], 8)); // [3, 5];
console.log(findPosition([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
