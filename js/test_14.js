function calculateEvenTotal(number) {
	let summ = 0;
	for (let i = 0; i <= Math.floor(number/2); i++) {
		summ = summ + (i*2);
}
	return summ;
}

console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));