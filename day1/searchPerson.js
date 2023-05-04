let persons = [
  {
    firstName: "sakib",
    lastName: "karate",
  },
  {
    firstName: "jibon",
    lastName: "maji",
  },
  {
    firstName: "michale",
    lastName: "khan",
  },
];

console.time();
function searchPerson(arr, name) {
  for (let person of arr) {
    if (person.firstName === name || person.lastName === name) {
      return true;
    }
  }
  return false; // O(n) -time complexity - worst case
  // return arr.find(
  //   (person) => person.firstName === name || person.lastName === name
  // )
  //   ? true
  //   : false;
}
console.timeEnd();
console.log(searchPerson(persons, "sakib")); // true
console.log(searchPerson(persons, "riyad")); // false
