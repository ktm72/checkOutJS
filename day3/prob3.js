//remove multiple items from a given array with duplication
function removeDups(arr) {
  let mp = {}, //k - space
    n = arr.length, // O(1) -space
    rem = []; // O(l) - space complexity
  //1st step: find items that need to be removed
  for (let i = 0; i < n; ++i) {
    const val = arr[i]; // O(1)
    if (mp[val] == null) {
      // object[key] -> val
      // O(1) - time
      mp[val] = true; // O(1) - time
    } else {
      if (!rem.includes(val)) {
        // O(l) - time
        rem.push(val); // O(1) - time
      }
    }

    // for (let j = i + 1; j < n; j++) {
    //   if (val === arr[j]) {
    //     rem.push(arr[j]);
    //   }
    // } //O(m)
  } // O(n) - time

  const res = arr.filter((item) => !rem.includes(item)); // O(n * l)- time complexity
  return res;
} // O(n) + O(n * l) - time complexity, O(l) + O(k) - space complexity

console.log(removeDups([1, 2, 3, 4, 5, 4, 2, 1, 2])); //[3, 5]
console.log(removeDups([1, 2, 5, 1, 7, 2, 4, 2])); //[ 5, 7, 4 ]
