// Sum of all subArray of length k
// Let say, the array is [1,2,3,4,5,6,7] and k = 3
// [1,2,3], [2,3,4], [3,4,5], [4,5,6], [5,6,7] are subArray
// Input array length = N, K is the window size
// Number of subArray is N-k+1 , 7- 3 + 1 = 5
function slidingWindow(arr, k) {
  let len = arr.length;
  let currSum = 0;
  // [1,2,3]
  for (let i = 0; i < k; i++) {
    currSum += arr[i];
  } // O(k), if k =len =7 then it becomes O(n)

  let result = [currSum]; //[6]
  //Iterate for num of subArray
  const numOfSubArray = len - k + 1;
  //[2,3,4]
  for (let i = 1; i < numOfSubArray; i++) {
    // current_sum = current_sum - prev_value + next_value
    currSum = currSum - arr[i - 1] + arr[i + k - 1]; // 9 - 2 + 5 = 12
    result.push(currSum); //O(1)
  } //k = 1 -> O(n)

  return result;
} // O(n)- time complexity
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(slidingWindow(arr, 3)); // [6, 9, ...]
