function addOverNum(first, ...args) {
	let sumTotal = 0;
	for (let i = 0; i < args.length; i += 1) {
		if (first < args[i]) {
			sumTotal = sumTotal + args[i];
		}
	}
	return sumTotal;

}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));



//and 
//function addOverNum(value, ...args) {
//  let total = 0;
//
//  for (const arg of args) {
//    if (arg > value) {
//      total += arg;
//    }
//  }
//
//  return total;
//}
//
//// Приклад використання
//console.log(addOverNum(50, 15, 27));                    // 0
//console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));      // 71
//console.log(addOverNum(15, 32, 6, 13, 19, 8));          // 51
//console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));    // 218