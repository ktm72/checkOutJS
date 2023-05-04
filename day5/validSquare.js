// 2* 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
function validSquare(num) {
  // for (let i = 1; i <= num; i++) {
  //   if (i * i === num) {
  //     return true;
  //   }
  //   if (i * i > num) {
  //     break;
  //   }
  // } // O(n)
  //1st step
  let l = 0,
    r = num;

  while (l <= r) {
    //2nd step: find mid
    const mid = ~~((l + r) / 2); //Math.floor()
    const midSqre = mid * mid; //

    //3rd step: mid compare, update pointer
    if (midSqre === num) {
      return true;
    } else if (midSqre > num) {
      r = mid - 1; // left search
    } else {
      // if (midSqre < num)
      l = mid + 1; // right search
    }
  } // O(logn) -> O(1)
  return false;
}

console.log(validSquare(16)); //true;
console.log(validSquare(18)); //false;
