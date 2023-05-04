//remove all duplicates from sorted array
function removeDup(nums) {
  let n = nums.length, // 9
    start = 1; // O(1) - space
  for (let i = 1; i < n; i++) {
    //new number - not repeat
    if (nums[i] !== nums[i - 1]) {
      //start updated
      nums[start++] = nums[i];
    }
  } // O(n)
  // console.log(start);
  while (start < n) {
    nums.pop(); //O(1) - time
    start++;
  } // O(m)
  return nums;
} // time - O(n)+O(m) , space- O(1)

// you shouldn't take more than constant space. O(1)
console.log(removeDup([1, 2, 2, 3, 4, 5, 6, 6, 7])); //[1,2,3,4,5,6,7]
// [1, 2, 3, 4, 5, 6,7 ]
// start = 7, n =9
