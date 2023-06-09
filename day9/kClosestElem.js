// find K closest elements surrounding of x
// return an array of k elements
// |a - x| == |b - x| , a < b than take a
const kClosestElem = (array, k, x) => {
  let len = array.length;
  let found = -1;
  for (let i = 0; i < len; i++) {
    if (array[i] === x) {
      found = i; //index
      break;
    }
  } //O(n) -> HW: Do it using Binary search
  let l = found - 1,
    r = found + 1;
  while (k > 1) {
    if (r === len) {
      // 4 - 4 + 1
      return array.slice(found - k + 1, r); //r =5, len =5,
    }
    // l >= 0 && r <len --> edge case
    if (l >= 0 && r < len) {
      const val = array[found]; //3
      const preDiff = Math.abs(array[l] - val); // abs(2-3) = 1
      const nextDiff = Math.abs(array[r] - val); // abs(4-3) = 1
      if (preDiff === nextDiff) {
        l--; //left
      } else {
        r++; // right
      }
    }
    k--;
  } // O(k) -> worst O(n)
  return array.slice(l + 1, r); // array.slice(1, 3)->[1, 2] <- index
}; // O(n) + O(log n) -> O(n), 2 * O(n) -> O(n)

console.log(kClosestElem([1, 2, 3, 4, 5], 2, 3)); // [2, 3]
console.log(kClosestElem([1, 2, 3, 4, 5], 4, 3)); // [1,2, 3, 4]
console.log(kClosestElem([1, 2, 4, 5, 6], 3, 6)); // [ 4, 5, 6]
//k = 2, x = 3, [2, 3] and [3, 4]
// take from lower index

console.log(kClosestElem([2, 3, 5, 8, 9, 12], 3, 11)); // [8, 9, 12]
// sliding window
