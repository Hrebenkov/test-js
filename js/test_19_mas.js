function getOrderQuantity(order) {
	return order.length;
}


console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
console.log(getOrderQuantity(["apple", "banana"]));
console.log(getOrderQuantity(["apple", "banana", "pear"]));
console.log(getOrderQuantity([]));