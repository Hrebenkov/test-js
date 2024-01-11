function countProps(object) {
  let propCount = 0;
  const objectTwo = Object.keys(object);

  for (const key of objectTwo) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


//function countProps(object) {
//  const propCount = Object.keys(object).length;
//  return propCount;
//}
//
//// Приклади викликів
//console.log(countProps({})); // 0
//console.log(countProps({ name: "Mango", age: 2 })); // 2
//console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3