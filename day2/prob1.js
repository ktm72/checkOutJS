//remove "", -, N/A from the object
const obj = {
  name: { first: "Haly", middle: "", last: "katte" },
  address: "N/A",
  products: ["biscuit", "ball", "-", "pen"],
};

// const keys = ["", "-", "N/A"];
console.time();
// function removeKeys(obj, keys) {
//   for (let elm in obj) {
//     if (typeof obj[elm] === "string" && keys.indexOf(obj[elm]) > -1) {
//       delete obj[elm];
//       continue;
//     }
//     if (Array.isArray(obj[elm])) {
//       const h = obj[elm].filter((item) => !keys.includes(item));
//       obj[elm] = h;
//       continue;
//     }
//     if (typeof obj[elm] === "object") {
//       removeKeys(obj[elm], keys);
//       continue;
//     }
//   }
//   return obj;
// }
// console.log(removeKeys(obj, keys));
// console.timeEnd();
function removeKeys(obj) {
  for (let elm in obj) {
    const val = obj[elm];
    if (val === "" || val === "N/A" || val === "-") {
      delete obj[elm];
      continue;
    }
    if (Array.isArray(val)) {
      const h = obj[elm].filter(
        (item) => item !== "-" && item !== "" && item !== "N/A"
      );
      obj[elm] = h;
      continue;
    }
    if (typeof obj[elm] === "object") {
      const newObj = obj[elm];
      for (let newElm in newObj) {
        const newVal = newObj[newElm];
        if (newVal === "" || newVal === "N/A" || newVal === "-") {
          delete newObj[newElm];
        }
      }
    }
  }
  return obj;
}

console.log(removeKeys(obj));
console.timeEnd();
