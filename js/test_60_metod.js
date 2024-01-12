function filterArray(numbers, value) {
	let totalPrice = [];
	numbers.forEach(function (number) {
		if (number > value) {
			totalPrice.push(number);
		}
	});
	return totalPrice;

}


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));