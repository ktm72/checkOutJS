function greaterElem(nums) {
  let n = nums.length;
  let max = Number.MIN_VALUE,
    res = [];
  for (let i = n - 1; i > 0; i--) {
    if (nums[i] > max) {
      max = nums[i];
      res.push(nums[i]);
    }
  } //O(n)
  return res.reverse();
} // O(2n) => O(n)
function swap(arr, i1, i2) {
  let temp = arr[i1]; // 3
  arr[i1] = arr[i2]; // 3 is replaced by 8
  arr[i2] = temp; // 8 is replaced by 3
  return arr;
}
console.log(greaterElem([14, 15, 8, 9, 5, 2])); //[15, 9 ,5 ,2]
console.log(greaterElem([14, 15, 17, 8, 9, 5, 3, 2])); //[17, 9, 5, 3 , 2]
