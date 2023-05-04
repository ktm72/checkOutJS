//Find minimum in rotated sorted array -> ascending order
function findMinRotated(nums) {
  let res = nums[0],
    l = 0,
    r = nums.length - 1;

  while (l <= r) {
    //array or part of that array is sorted
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    const mid = ~~((l + r) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[l]) {
      l = mid + 1; // right search
    } else {
      // nums[mid] < nums[l]
      r = mid - 1; // left search
    }
  }
  return res;
}

// constraint: time complexity - O(log(n))
console.log(findMinRotated([8, 9, 10, 2, 5, 6])); //  -> 2
//[2, 5, 6 , 8, 9 , 10] -> original
//[10, 2 ,5 ,6 ,8 ,9] -> 1st rotate
//[9 ,10 ,2 ,5 , 6, 8] -> 2nd
