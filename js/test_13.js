//function calculateTotal(number) {
//	let summ = 0;
//	while (number > 0) {
//		summ = summ + number;
//		number -= 1;
//		
//}
//	return summ;
//
//}
//
//console.log(calculateTotal(1));
//console.log(calculateTotal(3));
//console.log(calculateTotal(0));
//console.log(calculateTotal(18));
//console.log(calculateTotal(24));




function calculateTotal(number) {
	let summ = 0;
	for (let i = number; i > 0; i -= 1) {
		summ = summ + i;
}
	return summ;
}






console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));