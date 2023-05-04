function firstRepeatingNum(arr) {
  let map = {}, // O(n) - worst case- space
    n = arr.length; // O(1) -space
  for (let i = 0; i < n; ++i) {
    const key = arr[i]; // O(1)
    if (map[key] == null) {
      // obj[key] -> value
      // O(1) - time
      map[key] = true; // O(1) - time
    } else {
      return key;
    }
  } // O(n) - time
  return -1; // Not found - unique array
} // O(n) - time , O(n) -space

console.log(firstRepeatingNum([1, 3, 4, 6, 4, 3, 7, 8, 8])); // 4 - O(n)
console.log(firstRepeatingNum([1, 3, 4, 6, 7, 8])); // -1 - O(n)
