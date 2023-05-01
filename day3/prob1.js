// fizz buzz problem
// replace any number that divided by 3 with fizz,
// divided by 5 with buzz and
// divided by 3 & 5 with fizzBuzz

function FizzBuzz(num) {
  let res = ""; //O(1) - space complexity
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += "fizzbuzz ";
      continue;
    }
    if (i % 3 === 0) {
      res += "fizz ";
      continue;
    }
    if (i % 5 === 0) {
      res += "buzz ";
      continue;
    }
    res += i + " ";
  } // O(n) - time complexity
  return res;
}

console.log(FizzBuzz(17));
// 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17
