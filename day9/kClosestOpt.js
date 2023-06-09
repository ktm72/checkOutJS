const kClosestElem = (arr, k, x) => {
  //k = window size
  let len = arr.length,
    l = 0,
    r = len - k;

  while (l < r) {
    const mid = ~~((l + r) / 2); //0+1 =1 / =0.5 = 0

    //3 - 1 > 3 - 3-> 2> 0
    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1; // right
    } else {
      r = mid; //left
    }
  } // O(log n)
  return arr.slice(l, l + k); // (1, 3) -> [1, 2] = index
}; // O(log n)

console.log(kClosestElem([1, 2, 3, 4, 5], 2, 3)); // [2, 3]
console.log(kClosestElem([1, 2, 3, 4, 5], 4, 3)); // [1, 2, 3, 4]
console.log(kClosestElem([1, 2, 4, 5, 6], 3, 6)); // [ 4, 5, 6]
//k = 2, x = 3, [2, 3] and [3, 4]
// take lower index

// sliding window
console.log(kClosestElem([2, 3, 5, 8, 9, 12], 3, 20)); // [8, 9, 12]
console.log(kClosestElem([2, 3, 5, 8, 9, 12], 3, 11)); // [8, 9, 12]
