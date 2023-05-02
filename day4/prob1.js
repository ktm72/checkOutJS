//remove "", -, N/A from the object
const keys = ["", "-", "N/A"]; // O(l) - space

function removeKeys(obj, keys) {
  for (let key in obj) {
    if (typeof obj[key] === "string" && keys.indexOf(obj[key]) > -1) {
      delete obj[key];
      continue;
    }
    if (Array.isArray(obj[key])) {
      const h = obj[key].filter((item) => !keys.includes(item));
      obj[key] = h;
      continue;
    }
    if (typeof obj[key] === "object") {
      removeKeys(obj[key], keys); //recursion -> obj
      continue;
    } // O(m)
  } //O(n) + O(m)
  return obj;
} // O(l) - space
// console.log(removeKeys(obj, keys));
// function removeKeys(obj) {
//   for (let elm in obj) {
//     const val = obj[elm]; // obj[key] -> value
//     if (val === "" || val === "N/A" || val === "-") {
//       delete obj[elm];
//       continue;
//     } // O(1)
//     if (Array.isArray(val)) {
//       const h = obj[elm].filter(
//         (item) => item !== "-" && item !== "" && item !== "N/A"
//       ); //O(n)
//       obj[elm] = h; //O(1)
//       continue;
//     }
//     if (typeof val === "object") {
//       const newObj = obj[elm];
//       for (let newElm in newObj) {
//         const newVal = newObj[newElm];
//         if (newVal === "" || newVal === "N/A" || newVal === "-") {
//           delete newObj[newElm];
//         }
//       } //(m)
//     }
//   } // O(n * m) - time complexity
//   return obj;
// }
const obj = {
  name: { first: "Haly", middle: "", last: "katte" },
  address: "N/A",
  products: ["biscuit", "ball", "-", "pen"],
};
console.log(removeKeys(obj));
