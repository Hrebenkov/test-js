function add(...args) {
	let sumTotal = 0;
	for (let i = 0; i < args.length; i += 1) {
		sumTotal = sumTotal + args[i];
	}
	return sumTotal;

}


console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));



// and +
//function add(...args) {
//  return args.reduce((total, current) => total + current, 0);
//}
//
//// Приклад використання
//console.log(add(15, 27));          // 42
//console.log(add(12, 4, 11, 48));    // 75
//console.log(add(32, 6, 13, 19, 8)); // 78