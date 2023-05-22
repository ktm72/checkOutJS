// koko loves to eat bananas. There are n piles of bananas,
// i^th pile has piles[i] bananas.
// Guards have gone and will come back in h hours
// koko's eating speed k banana per hour
// if a pile has less than k bananas, eats all of them
// not gonna eat anymore during that hour
// koko wants to eat all bananas before the gaurds return
// return min speed k such that koko can eat all the bananas within h hours

function minEatingSpeed(piles, h) {
  // let len = piles.length,
  //   sum = 0;
  // for (let i = 0; i < len; i++) {
  //   sum += piles[i];
  // }
  // return Math.ceil(sum / h);

  // k = [1,2,3,4,5,6,....,11] l =1, r = 11
  let l = 1,
    r = Math.max(...piles), //Math.max(3,6,7, 11) -> 11
    minSpeed = r; //max
  while (l <= r) {
    let k = ~~((l + r) / 2); //mid = 6, 3, 4
    let totalHours = 0;
    for (const p of piles) {
      totalHours += Math.ceil(p / k);
    } // O(n)
    // sum = array.reduce((acc, curr) => acc += Math.ceil(curr/k), 0)

    if (totalHours <= h) {
      minSpeed = Math.min(minSpeed, k); // (11, 6) -> 6
      r = k - 1; //left search
    } else {
      l = k + 1; // right search
    }
  }
  return minSpeed; //O(log n)
} // O(n * logn) -> time

//pile[0] has 3 bananas
//pile[1] has 6 bananas
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 27/8 = 3.9 , 28/8=4
//hours = 8, return 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // -> 30, (-> 18)
