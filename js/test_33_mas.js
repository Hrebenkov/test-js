function calculateTotalPrice(order) {
	let orderSum = 0;
	for (const orderTotal of order) {
		orderSum = orderSum + orderTotal;
	}
	return orderSum;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));