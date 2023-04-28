// Palindrome -> A word that is similar in reverse order

// abba <-> abba
// mango <-> ognam

function palindrome(str) {
  const len = str.length;
  // let reverse = "";
  // for (let i = len - 1; i >= 0; i--) {
  //   const char = str[i];
  //   reverse += char;
  // }
  // return str === reverse ? true : false; // O(n) - time complexity
  let l = 0,
    r = len - 1;
  while (l <= r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true; // O(n) - worst
}

console.log(palindrome("abba")); // true
console.log(palindrome("abca")); // false
console.log(palindrome("soros")); // true
console.log(palindrome("mango")); // false
