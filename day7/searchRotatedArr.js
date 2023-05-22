//Find minimum in rotated sorted array -> ascending order
function searchRotatedArr(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = ~~((l + r) / 2); // Math.floor()
    if (target === nums[mid]) {
      return mid; //position= index
    }

    // [5, 8, 10,2,3] -> l=5, mid =10, r = 3
    //part of array is sorted
    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1; //right search
      } else {
        r = mid - 1; //left search
      }
    } else {
      // nums[l] > nums[mid]
      //[5,10, 1, 2, 3] -> l =5, mid=1, r=3
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1; // left search
      } else {
        l = mid + 1; // right search
      }
    }
  }
  return -1; //Not found
} // O(1) - space
// constraint: time complexity - O(log(n))
console.log(searchRotatedArr([8, 9, 10, 2, 5, 6, 7], 10)); //  -> 2
console.log(searchRotatedArr([8, 9, 10, 2, 5, 6, 7], 7)); //  -> 6
//[2, 5, 6 , 8, 9 , 10] -> original
//[10, 2 ,5 ,6 ,8 ,9] -> 1st rotate
//[9 ,10 ,2 ,5 , 6, 8] -> 2nd rotate
