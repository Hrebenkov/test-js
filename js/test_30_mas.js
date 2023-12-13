function getEvenNumbers(start, end) {
		let totalPrice = [];
	for (let i = start; i <= end; i += 1) {
		if (i % 2 === 0) {
			totalPrice.push(i);
		}
		
	}
	return totalPrice;
}
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));